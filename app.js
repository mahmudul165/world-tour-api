fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
  // console.log(data);
   displayCountries(data)
})

   const displayCountries = country =>{   
   const infoDiv=document.getElementById('country-info')
   country.forEach(element => { 
         const countryDiv=document.createElement('div')
         countryDiv.className='country';
         const countryInform =   
                            `                    
                            <h3 class='country-name' >${element.name}</h3> 
                            <p>${element.capital}</p>
                            <button onclick="displayCountryDetails('${element.name}')">Details</button>                           
                           `
               countryDiv.innerHTML= countryInform
               infoDiv.appendChild(countryDiv)
            });

   };


   const displayCountryDetails = name =>{
      const url=`https://restcountries.eu/rest/v2/name/${name}`
      fetch(url)
      .then(res => res.json())
      .then(data => randerCountryInfo(data[0]));

   }
   const randerCountryInfo = country =>{
      const countryDetails =document.getElementById('country-details')
      countryDetails.innerHTML=`
                              <h1>${country.name}</h1>
                              <p>${country.population}</p>
                              <p>${country.area}</p>
                              <img src='${country.flag}'>

      `
   }

   // for (let index = 0; index < country.length; index++) {
   //   const element = country[index];
   //   const countryDiv=document.createElement('div')
   //   countryDiv.className='country';
   // const countryInform =   
   //                    `                    
   //                    <h3 class='country-name' >${element.name}</h3> 
   //                    <p>${element.capital}</p>                           
   //                   `
   //       countryDiv.innerHTML= countryInform
   //       infoDiv.appendChild(countryDiv)
   // }



