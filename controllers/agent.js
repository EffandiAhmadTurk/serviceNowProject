const Agent = require('../models/Agent');

const dbConnect = require('../utils/dbConnect');

dbConnect();

const getLocalAgentsAggregation = locationSlug => [
  {
    $unwind: '$serviceAreas',
  },
  {
    $addFields: { serviceArea: '$serviceAreas' },
  },
  {
    $group: {
      _id: {
        mlsId: '$mlsId',
        serviceArea: '$serviceArea',
        slug: '$slug',
        firstName: '$firstName',
        lastName: '$lastName',
      },
    },
  },
  {
    $match: { '_id.serviceArea.slug': locationSlug },
  },
  {
    $sort: { '_id.serviceArea.totalClosedSales': -1 },
  },
  {
    $project: {
      _id: 0,
      mlsId: '$_id.mlsId',
      slug: '$_id.slug',
      firstName: '$_id.firstName',
      lastName: '$_id.lastName',
      serviceArea: '$_id.serviceArea',
    },
  },
];

exports.getAgents = async (locationSlug, page) => {
  const pageSize = 10;
  const skipQuery = (page - 1) * pageSize || 0;

  try {
    const localAgents = await Agent.aggregate(
      getLocalAgentsAggregation(locationSlug)
    )
      .skip(skipQuery)
      .limit(pageSize);

    const total = await Agent.find(
      {
        'serviceAreas.slug': locationSlug,
      },
      '-_id -__v'
    ).countDocuments();

    const agentsWithRank = localAgents.map((agent, idx) => {
      agent.rank = idx + 1;
      if (page > 1) {
        agent.rank = idx + 1 + skipQuery;
      }

      return agent;
    });

    return { agents: agentsWithRank, total };
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

exports.getAgent = async mlsId => {
  try {
    const agent = await Agent.findOne({ mlsId }, '-_id -__v').lean();

    return agent;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

exports.getAgentsSlugs = async limit => {
  const queryLimit = limit ? limit : 0;

  try {
    const agents = await Agent.find()
      .limit(queryLimit)
      .sort({ totalClosedSales: -1 })
      .lean();

    const agentsSlugs = agents.map(({ slug, mlsId }) => ({
      slug,
      mlsId,
    }));

    return agentsSlugs;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

// Desc: Used to by listing page to connect to agent page
exports.getAgentSlug = async mlsId => {
  try {
    const agent = await Agent.findOne({ mlsId }, '-_id -__v').lean();

    let agentSlug = null;

    if (agent) {
      agentSlug = {
        slug: agent.slug,
        mlsId: agent.mlsId,
      };
    }

    return agentSlug;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
