import buildMakeService from './service';
import RulesChecker from '../RulesChecker';
import serviceRules from '../rules/serviceRules';

const MakeService = buildMakeService({RulesChecker, serviceRules});

export default MakeService;
