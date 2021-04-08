var person = {
    firstName : 'Mai',
    lastName : ' Hoa',
    country:{
        city : ' Da Nang',
        country: 'VietNam'
    }
};

const Strings = 
`
    ${person.firstName}
    ${person.lastName}
    ${person.country.city}
`
console.log(Strings);

