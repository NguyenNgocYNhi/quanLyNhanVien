
class thongTin {
    constructor (id,lastName,name,age,major,time) {
        this.id = id;
        this.firstName = lastName;
        this.name = name;
        this.age = age;
        this.major = major;
        this.time = time;
    }
}



const create = () => {
    let lastName = document.getElementById('lastName').value;
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let major = document.getElementById('major').value;
    let time = document.getElementById('time').value;

    let employee = new thongTin(-1,lastName,name,age,major,time);

    axios ({
        url: "https://61ed497bf3011500174d239c.mockapi.io/employees" ,
        method: "POST",
        data: employee
    }).then(
        (response) => {
            Swal.fire(
                'Thông Báo',
                'Đã cập nhật thành công ' + lastName + " " + name + ' vào danh sách',
                'success'
              )
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )

}


const check = () => {

    let lastName = document.getElementById('lastName').value;
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let major = document.getElementById('major').value;
    let time = document.getElementById('time').value;


    if (((lastName == "") || (name == "") || (age == "") || (major == "") || (time == "")) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Làm ơn nhập dữ liệu!',
          })
    }
    else {
        create();
    }
}

document.getElementById('submit').addEventListener('click', () => {
    check();
    reset();
})


const reset = () => {
    document.getElementById('lastName').value = "";
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('major').value = "";
    document.getElementById('time').value = "";
}

document.getElementById('reset').addEventListener('click', () => {
    reset();
})
