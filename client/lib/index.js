module.exports = {
  // TODO: fix rounding
  formatCount: (count) => {
    if (count >= 10000) {
      return `${(count / 1000).toFixed(1)}K `;
    }

    if (count <= 100000) {
      return `${(count / 1000).toFixed(2)}K `;
    }

    if (count < 1000000) {
      return `${(count / 1000).toFixed(1)}K `;
    }

    return count;
  },

};
