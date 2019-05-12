import PropTypes from 'prop-types';
import { useActualBreakpoint } from '../../hooks/use-actual-breakpoint';

export const ProgressiveRenderRaw = ({ options, theme }) => {
  const point = useActualBreakpoint(theme, options);

  if (!point) {
    return null;
  }

  if (typeof options[point].render === 'function') {
    return options[point].render();
  }

  return null;
};

ProgressiveRenderRaw.propTypes = {
  options: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

ProgressiveRenderRaw.defaultProps = {
  options: {},
};
