import { PropTypes } from 'prop-types';

function Display({ result = '0' }) {
  return <h1>{result}</h1>;
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;