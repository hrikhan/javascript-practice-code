function fakeAPI() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("dataload") }, 1000);
    })
}

fakeAPI().then((data) => {
    console.log(data)
})



// async 


async function getdata() {

    const result = await fakeAPI();
    console.log(result);
}
getdata();

async function fakeloginuser(email, password) {

  return  new Promise((resolve, reject) => {
        const USER = {
            id: 1,
            email: "admin@gmail.com",
            password: "1234",
            name: "Hridoy",
        }

        setTimeout(() => {

            if (USER.email === email && USER.password === password) {
                const { password, ...safeUser } = USER;
                resolve(safeUser);
            }
            else {
                reject("invalid credentials");
            }
        }, 1000);
    });
}

const loginuser = async () => {
    try {
        const res = await fakeloginuser("admin@gmail.com", "1234")
        console.log(res);
    }
    catch (err) {
        console.error(err.messsage);
    }
};
loginuser();
console.log("hridoy")