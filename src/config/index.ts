import _ from 'lodash';
import configDefault from './config';
import configLocal from './local';

const config = _.merge(configLocal, configDefault);

export default config;
