import Assets from "./assests";

export const userColumns = [

    { field: 'id', headerName: 'ID', width: 70 },
    { field: "user", headerName: "User", width: 230, 
        renderCell: (params) => {
            return (
                <div>
                    <div className="cellWithImg">
                        <img className='cellImg' alt="avatar" src={params.row.img} />
                        {params.row.username}
                    </div>
                </div>
            )
        }
    },
    {field: "email", headerName: "Email", width: 100},
    {field: "age", headerName: "Age", width: 100},
    {field: "status", headerName: "Status", width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        } 
    }
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: `${Assets.images.logo}`,
        status: "active",
        email: "1snow@gmail.com",
        age :35
    },
    {
        id: 2,
        username: "Meeker",
        img: `${Assets.images.logo}`,
        status: "pending",
        email: "meeker@airtransport.cc",
        age :40
    },
    {
        id: 3,
        username: "LittleGuy",
        img: `${Assets.images.logo}`,
        status: "active",
        email: "litteguy@hotmail.com",
        age :65
    },
    {
        id: 4,
        username: "cutiepie32",
        img: `${Assets.images.logo}`,
        status: "inactive",
        email: "cutiepie32@gmail.com",
        age :20
    },
    {
        id: 5,
        username: "jetson",
        img: `${Assets.images.logo}`,
        status: "active",
        email: "jetsonnow@gmail.com",
        age :19
    },
    {
        id: 6,
        username: "Helman",
        img: `${Assets.images.logo}`,
        status: "active",
        email: "hellman@gmail.com",
        age :45
    },
    {
        id: 7,
        username: "Smithsonian",
        img: `${Assets.images.logo}`,
        status: "pending",
        email: "smithsonian@airtransport.cc",
        age :40
    },
    {
        id: 8,
        username: "smallguy",
        img: `${Assets.images.logo}`,
        status: "active",
        email: "smallguy@hotmail.com",
        age :65
    },
    {
        id: 9,
        username: "fryguy",
        img: `${Assets.images.logo}`,
        status: "inactive",
        email: "fryguy@gmail.com",
        age :20
    },
    {
        id: 10,
        username: "Hattiesburg",
        img: `${Assets.images.logo}`,
        status: "active",
        email: "hattiesburg@gmail.com",
        age :19
    }
]