import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Box, Button, Collapse } from "@mui/material";
import Loader from "../components/Loader";
// import { getAdverts, getWidgetData } from "../../fetchData";
import instance from "../API";

const Types = [
  {
    value: "car",
    label: "Автомобиль",
  },
  {
    value: "apartment",
    label: "Квартира",
  },
  {
    value: "apartment",
    label: "Дом",
  },
];

const Form = () => {
  const [type, setType] = useState("car");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("+7");
  const [price, setPrice] = useState("0");
  const [city, setCity] = useState("Москва");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [model, setModel] = useState("");
  const [carType, setCarType] = useState("Седан");
  const [volume, setVolume] = useState("0");
  const [power, setPower] = useState("0");

  const [rooms, setRooms] = useState("0");
  const [square, setSquare] = useState("0");

  const [openForm, setOpenForm] = useState(false);

  const [successValidate, setSuccessValidate] = useState(false);

  useEffect(() => {
    instance.get("/api/brom/sales/form").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const validate = () => {
    if (address !== "" && phone !== "" && price !== "" && city !== "") {
      setSuccessValidate(true);
    } else {
      setSuccessValidate(false);
    }
  };

  const submit = () => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("price", price);

    if (type === "car") {
      formData.append("model", model);
      formData.append("car_type", carType);
      formData.append("engine_volume", volume);
      formData.append("engine_power", power);
    } else if (type === "apartment") {
      formData.append("rooms", rooms);
      formData.append("square", square);
    }

    instance
      .post("/api/brom/sales", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      ;
  };

  if (loading) {
    console.log(data);
    return <Loader />;
  }

  return (
    <div>
      <Button
        variant="text"
        style={{ marginBottom: "10px", marginTop: "20px"}}
        onClick={() => {
          setOpenForm(!openForm);
        }}
      >
        Создать форму
      </Button>
      <Collapse in={openForm}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "500 px" },
          }}
          autoComplete="off"
        >
          <TextField
            id="filled-select-currency"
            select
            label="Тип"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            style={{ marginLeft: 0 }}
          >
            {Types.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </TextField>
          
           <TextField
            id="filled-select-currency"
            select
            label="Город"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            style={{ marginLeft: 0 }}
          >
            {data.fields.city.values.map((option) => {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </TextField>
          <br />
          <TextField
            id="filled-basic"
            label="Адрес"
            variant="filled"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            style={{ marginLeft: 0 }}
          />
          <TextField
            id="filled-basic"
            label="Номер телефона"
            variant="filled"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Цена"
            variant="filled"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
         
          {type === "car" ? (
            <div>
              <TextField
                id="filled-basic"
                label="Марка"
                variant="filled"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
                style={{ marginLeft: 0 }}
              />
              <TextField
                id="filled-basic"
                label="Объём двигателя"
                variant="filled"
                value={volume}
                onChange={(e) => {
                  setVolume(e.target.value);
                }}
              />
              <TextField
                id="filled-basic"
                label="Мощность двигателя (л.с)"
                variant="filled"
                value={power}
                onChange={(e) => {
                  setPower(e.target.value);
                }}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Тип кузова"
                value={carType}
                onChange={(e) => {
                  setCarType(e.target.value);
                }}
              >
                {data.reference_fields["type.car"].car_type.values.map(
                  (option) => {
                    return (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    );
                  }
                )}
              </TextField>
            </div>
          ) : (
            <div>
              <TextField
                id="filled-basic"
                label="Кол-во комнат"
                variant="filled"
                value={square}
                onChange={(e) => {
                  setSquare(e.target.value);
                }}
              />
            </div>
          )}

          <Box style={{ marginTop: "10px", marginBottom: '15px' }}>
            <Button variant="text" onClick={validate}>
              Проверить
            </Button>
            <Button
              variant="text"
              onClick={submit}
              disabled={!successValidate}
              style={{ marginLeft: 5 }}
            >
              Добавить
            </Button>
          </Box>
        </Box>
      </Collapse>
    </div>
  );
};

export default Form;
