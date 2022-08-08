import './bootstrap';
import { formatDistance, subDays } from 'date-fns'
import {greeting} from "./functions";

let checkDate = formatDistance(subDays(new Date(), 5), new Date(), { addSuffix: true })
alert(greeting(checkDate));
