import './Form.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const namaRegex = /^[a-zA-Z\s]*$/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const handphoneRegex = /^(\+\d{1,3}[- ]?)?\d{10,13}$/

export default function Form() {
    const { handleSubmit } = useForm();
    const onSubmit = () => {
        if (data.nama && data.email && data.noHandphone && data.pendidikan && data.kelas && data.harapan && data.suratKesungguhan && data.nama.match(namaRegex) && data.email.match(emailRegex) && data.noHandphone.match(handphoneRegex)) {
            alert(`Data pendaftar "${data.nama}" berhasil diterima`)
        } else {
            alert('Data pendaftar tidak sesuai')
        }
    };

    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: "",
        suratKesungguhan: null
    }

    const baseError = {
        nama: false,
        email: false,
        noHandphone: false,
    }

    const [data, setData] = useState(baseData)
    const [errorMessage, setErrorMessage] = useState(baseError)

    return (
        <div className="form-registration">
            <h3 style={{ marginBottom: "40px" }}>Pendaftaran Peserta Coding Bootcamp</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input">
                    <label htmlFor="nama">Nama Lengkap</label>
                    <input
                        id="nama"
                        type="text"
                        value={data.nama}
                        onChange={(e) => {
                            setData({ ...data, nama: e.target.value })
                            if (e.target.value.match(namaRegex) || e.target.value === "") {
                                setErrorMessage({ ...errorMessage, nama: false })
                            } else {
                                setErrorMessage({ ...errorMessage, nama: true })
                            }
                        }}
                    />
                    {errorMessage.nama && <p className="error-message" role="alert">Nama lengkap harus berupa huruf</p>}
                </div>

                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                            if (e.target.value.match(emailRegex) || e.target.value === "") {
                                setErrorMessage({ ...errorMessage, email: false })
                            } else {
                                setErrorMessage({ ...errorMessage, email: true })
                            }
                        }}
                    />
                    {errorMessage.email && <p className="error-message" role="alert">Email tidak sesuai</p>}
                </div>

                <div className="form-input">
                    <label htmlFor="noHandphone">No Handphone</label>
                    <input
                        id="noHandphone"
                        type="tel"
                        value={data.noHandphone}
                        onChange={(e) => {
                            setData({ ...data, noHandphone: e.target.value })
                            if (e.target.value.match(handphoneRegex) || e.target.value === "") {
                                setErrorMessage({ ...errorMessage, noHandphone: false })
                            } else {
                                setErrorMessage({ ...errorMessage, noHandphone: true })
                            }
                        }}
                    />
                    {errorMessage.noHandphone && <p className="error-message" role="alert">No Handphone tidak sesuai</p>}
                </div>

                <div onChange={(e) => setData({ ...data, pendidikan: e.target.value })}>
                    <div style={{ marginLeft: "10px", marginBottom: "-2px", fontWeight: "500" }}>Latar Belakang Pendidikan</div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input
                            id="it"
                            type="radio"
                            name="pendidikan"
                            value="IT"
                        />
                        <label htmlFor="it">IT</label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input
                            id="nonIT"
                            type="radio"
                            name="pendidikan"
                            value="Non IT"
                        />
                        <label htmlFor="nonIT">Non IT</label>
                    </div>
                </div>

                <div className="form-input">
                    <label htmlFor="kelas">Kelas Coding yang Dipilih</label>

                    <div style={{ margin: '10px' }}>
                        <select id="kelas" value={data.kelas} onChange={(e) => setData({ ...data, kelas: e.target.value })}>
                            <option value="" disabled={true}>Pilih Kelas...</option>
                            <option value="React Native">React Native</option>
                            <option value="Vue Js">Vue Js</option>
                            <option value="Java Spring Boot">Java Spring Boot</option>
                            <option value="Data Science">Data Science</option>
                        </select>
                    </div>
                </div>

                <div className="form-input">
                    <label htmlFor="surat">Foto Surat Kesungguhan</label>
                    <input
                        id="sura"
                        type="file"
                        onChange={(e) => {
                            setData({ ...data, suratKesungguhan: e.target.files[0] })
                        }}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="harapan">Harapan Untuk Coding Bootcamp Ini</label>
                    <textarea
                        id="harapan"
                        value={data.harapan}
                        onChange={(e) => {
                            setData({ ...data, harapan: e.target.value })
                        }}
                    />
                </div>

                <div>
                    <input className="button-7" style={{ backgroundColor: "#2ecc71", margin: "10px 10px 50px 10px" }} type="submit" />
                    <button className="button-7" style={{ backgroundColor: "#e74c3c" }} onClick={() => setData({ ...baseData })}>Reset</button>
                </div>
            </form>
        </div>
    );
}