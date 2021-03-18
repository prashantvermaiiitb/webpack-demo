import _ from 'lodash';

const hello = {
    print: () => {
        return (_.join(['Another', 'module', 'loaded!'], ' '));
    }
}

export default hello;

