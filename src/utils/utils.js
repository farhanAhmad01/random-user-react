export const filtering = (user, option,input) => {
    const name = user.name.first + user.name.last + user.name.title;
    const age = user.registered.age;
    const country = user.location.country;
    let search;
    if (option === "name") {
      search = name;
    }
    if (option === "age") {
      search = age;
    }
    if (option === "country") {
      search = country;
    }
    if (
      search === age
      // console.log("in filter",input)
        ? search > input
        : search.toLowerCase().includes(input.toLocaleLowerCase().trim())
    )
      return true;
    return false;
  };
