const { paginateResults } = require('./utils');
const firebase = require('./api/config')


module.exports = {

Query : {

  properties: async (_, { offset, limit }, { dataSources }) => {
    const properties = await dataSources.propertyAPI.getAllProperties();
    const paginatedProperties = properties.slice(offset, limit + 1);

    return {
      properties: paginatedProperties.slice(0, limit),
      hasMore: paginatedProperties.length > limit
    };
  },

    propertiesOffplan: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.completion_status === "off_plan";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },

    villa: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.property_type === "VH";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },


    apartment: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.property_type === "AP";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },


    townhouse : async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.property_type === "TH";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },


    hotelApartment : async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.property_type === "HA";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },

    penthouse : async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.property_type === "PH";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },

    office : async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.property_type === "OF";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },

    property: (_, { id }, { dataSources }) =>
      dataSources.propertyAPI.getPropertyById({ propertyId: id }),



    rs: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.offering_type === "RS";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },

    rr: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.offering_type === "RR";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },



    cs: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.offering_type === "CS";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },


    cr: async (_, {pageSize = 50, after}, {dataSources}) => {
      const allProps = await dataSources.propertyAPI.getAllProperties();
      const allProperties = allProps.filter((item) => {
      if (typeof(item.photo) !== 'undefined' && item.photo.length)
      return item.offering_type === "CR";
    });
      allProperties;
      const properties = paginateResults({
        after,
        pageSize,
        results: allProperties
      });
      return {
        properties,
        cursor : properties.length ? properties[properties.length -1].cursor : null,
        hasMore : properties.length
        ? properties[properties.length -1].cursor !==
        allProperties[allProperties.length -1].cursor
        : false
      };
    },

  me: async (_, {email, name, uid }) => {
        var user = firebase.auth().currentUser;
        var name, email, uid;
        if (user != null) {
          name = user.displayName;
          email = user.email;
          uid = user.uid;
         }
         return { user }
      },
   },


Mutation: {

  signupWithEmail: async (_, { email, password }) => {
    const user = firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => { return userCredentials.user.updateProfile
      ({displayName: name})
      })
   return { user }
  },

  loginWithEmail: async (_, { email, password }) => {
    const user = firebase.auth()
    .signInWithEmailAndPassword(email, password)
    return { user }
  },

  handleForgotPassword : async (_, { email }) => {
    const user = firebase.auth()
    .sendPasswordResetEmail(email)
    return { user }
  },

  handleDeleteProfile : async (_, { email, name, uid }) => {
    const currentUser = firebase.auth().currentUser.delete()
  },

  handleLogout : async (_, { email, name, uid }) => {
    const currentUser = firebase.auth().signOut();
  },

},

}
