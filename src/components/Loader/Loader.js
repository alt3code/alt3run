import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
    marginTop: '50px'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const Loader = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={50}
      left={0}
      top={0}
      status="loading"
      style={style.refresh}
    />
  </div>
);

export default Loader;
