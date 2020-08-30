module.exports = {
  // TODO: fix rounding
  formatCount: (count) => {
    let result = count;

    if (count > 1000000) {
      result = `${parseFloat((count / 100000).toFixed(1))}M `;
    }

    if (count >= 10000 && count <= 100000) {
      result = `${parseFloat((count / 1000).toFixed(1))}K `;
    }

    if (count >= 100000 && count < 1000000) {
      result = `${(count / 1000).toFixed(0)}K `;
    }

    return result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },

};
