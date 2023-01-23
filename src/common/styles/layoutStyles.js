const styles = {
  mainColumns: {
    col1: {
      lg: { span: 9, order: '1' },
      xs: { span: 12, order: '2' }
    },
    col2: {
      lg: { span: 3, order: '2' },
      xs: { span: 12, order: '1' }
    }
  },
  mainContainer: {
    minWidth: '300px',
    minHeight: '0'
  },
  row: {
    height: '100%',
    minHeight: window.innerHeight,
  }
};

export default styles;
