const { RESTDataSource } = require('apollo-datasource-rest');

class PropertyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "";
  }

async allProperties() {
const fetch = await this.get("");
return fetch.properties;
}

async getAllProperties() {
const  response = await this.allProperties();
return Array.isArray(response)
? response.map((item) => this.propertyReducer(item))
: []
}

async getPropertyById({ propertyId }) {
const res = await this.getAllProperties('', { id: propertyId });
return this.propertyReducer(res[0]);
}

async getPropertiesByIds({ propertyIds }) {
  return Promise.all(
    propertyIds.map(propertyId => this.getPropertyById({ propertyId })),
  );
}


  propertyReducer(item, index){

    return {
       id : [index] - 0 || 0,
       cursor :  [index] - 0,
       title_en: item.title_en,
       bedroom : item.bedroom,
       property_type : item.property_type,
       bathroom : item.bathroom,
       community: item.community,
       sub_community: item.sub_community,
       city : item.city,
       completion_status : item.completion_status,
       price: item.price,
       size : item.size,
       size_units : item.size_units,
       reference_number : item.reference_number,
       geopoints : item.geopoints,
       price_currency : item.price_currency,
       description_en : item.description_en,
       private_amenities : item.private_amenities,
       permit_no : item.permit_no,
       status : item.status,
       offering_type: item.offering_type,
       rental_period : item.rental_period,
       listing_ref : item.listing_ref,
       photo :  item.photo.map(i => ({
         url : i.url
       })),
       agent : {
         name : item.agent.name,
         license_no : item.agent.license_no,
         id : item.agent.id,
         phone : item.agent.phone,
         email : item.agent.email
       }
     }
    }
  }



module.exports = PropertyAPI;
