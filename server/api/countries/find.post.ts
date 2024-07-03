// api/countries/find
//methods post
//post{country:string}

import { countryList } from "@doubco/countries";



export default eventHandler(async (event) => {

    const body = await readBody(event) // body {}

    const { country } = body
    return {
        countries: countryList.filter((obj)=> obj.label.includes(country))
    }
})