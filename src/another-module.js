import _ from 'lodash';

export default {
    print: () => {
        return (_.join(['Another', 'module', 'loaded!'], ' '));
    }
}

// export default hello;

