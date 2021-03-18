import _ from 'lodash';

const hello = {
    print: () => {
        console.log('this should be pre-loaded alongwith parent!!');
        return (_.join(['Another', 'module', 'loaded!'], ' '));
    }
}

export default hello;

