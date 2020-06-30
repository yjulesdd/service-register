import buildMakeService from './service';
import RulesChecker from '../RulesChecker';
import serviceRules from '../rules/serviceRules';

const MakeService = buildMakeService({RulesChecker : RulesChecker.checkRules, serviceRules});

export default MakeService;
