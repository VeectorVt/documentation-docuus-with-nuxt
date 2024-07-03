import { countryList } from "@doubco/countries";



export default () => {
    return {
     random_country:countryList[Math.floor(Math.random()*countryList.length)]
    }
}