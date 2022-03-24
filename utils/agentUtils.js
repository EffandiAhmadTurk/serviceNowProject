export const getTopAgentsTotalSales = topAgents => {
  const sumCloseSales = topAgents.reduce((sum, agent) => {
    return sum + agent.totalClosedSales;
  }, 0);
  return sumCloseSales;
};

export const getAvgNumSales = (agents, agentCount) => {
  const sumCloseSales = agents.reduce((sum, agent) => {
    return sum + agent.totalClosedSales;
  }, 0);

  const averageNumberOfTransaction =
    Math.round(sumCloseSales / agentCount) || null;
  return averageNumberOfTransaction;
};

export const getAvgDaysOnMarket = (agents, agentCount) => {
  const sumDaysOnMarket = agents.reduce((sum, agent) => {
    return sum + agent.averageDaysOnMarket;
  }, 0);
  const averageDaysOnMarket = Math.round(sumDaysOnMarket / agentCount) || null;
  return averageDaysOnMarket;
};

export const getAvgListPrice = (agents, agentCount) => {
  const sumListPrice = agents.reduce((sum, agent) => {
    return sum + agent.averageListPrice;
  }, 0);
  const averageListPrice = Math.round(sumListPrice / agentCount) || null;
  return averageListPrice;
};

export const getAvgClosePrice = (agents, agentCount) => {
  const sumClosePrice = agents.reduce((sum, agent) => {
    return sum + agent.averageClosePrice;
  }, 0);
  const averageClosePrice = Math.round(sumClosePrice / agentCount) || null;
  return averageClosePrice;
};

export const getCloseListPriceRatio = (averageClosePrice, averageListPrice) => {
  const closeListPriceRatio =
    Math.round((averageClosePrice / averageListPrice) * 100 * 100) / 100 ||
    null;

  return closeListPriceRatio;
};

export const getTotalClosedSales = agents => {
  const sum = agents.reduce((sum, agent) => {
    return sum + agent.totalClosedSales;
  }, 0);
  return sum;
};

export const getTotalTransactionVolume = agents => {
  let total = 0;
  if (agents) {
    agents.forEach(agent => {
      const agentVolume = agent.averageClosePrice * agent.totalClosedSales;
      total = total + agentVolume;
    });
  }
  return total;
};

export const getAgentWithHighestAverageClosePrice = agents => {
  const agentsCopy = [...agents];
  if (agentsCopy.length) {
    const agentsSortedByAverageClosePrice = agentsCopy.sort(
      (a, b) =>
        b.serviceArea.averageClosePrice - a.serviceArea.averageClosePrice
    );

    return agentsSortedByAverageClosePrice[0] || {};
  }
  return {};
};

export const getAgentWithHeighestCloseToListRatio = agents => {
  const agentsCopy = [...agents];
  if (agentsCopy.length) {
    const agentsSortedByCloseToListRatio = agentsCopy.sort(
      (a, b) =>
        b.serviceArea.closeListPriceRatio - a.serviceArea.closeListPriceRatio
    );

    return agentsSortedByCloseToListRatio[0] || {};
  }
  return {};
};
