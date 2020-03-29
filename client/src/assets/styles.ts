import jss from 'jss';
import reset from 'reset-jss';
import preset from 'jss-preset-default';

const styles = {
  '@global': {
    html: {
      'box-sizing': 'border-box',
      fontFamily: "'Roboto', sans-serif",
      fontSize: '62.5%'
    },

    body: {
      margin: 0,
      padding: 0,
      fontSize: '1.4rem'
    }
  }
};

jss.setup(preset());
const resetSheet = jss.createStyleSheet(reset);
const globalSheet = jss.createStyleSheet(styles);

function attachStylesheets() {
  [resetSheet, globalSheet].forEach(sheet => sheet.attach());
}

export default attachStylesheets;
