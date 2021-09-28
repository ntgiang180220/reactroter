import React, { Component } from 'react';
import  Redirect  from 'react-router-dom/Redirect';

class Contact extends Component {
constructor(props){
    super(props);
    this.state={
        isRedirect: false,
        fNgay:"thu7"
       
    }
}


isChange = (event) =>{
    const ten = event.target.name
    const giatri = event.target.value;
    console.log(ten);
    console.log(giatri);
    this.setState({
        [ten]: giatri
    });
}



    submitForm = (event) =>{
        event.preventDefault(); 
        this.setState({
            isRedirect:true
        });
     
    }


    isFileChange = (event) => {
        const tenanh = event.target.files[0].name;
        this.setState(
            {
                fAnh : tenanh
            }
        );
    }

    getGiaTri = () => {
        var noiDung ="";
        noiDung += "Ten nhan duoc la" + this.state.fName;
        noiDung += " / Email nhan duoc la" + this.state.fEmail;
        noiDung += " / So dien thoai nhan duoc la" + this.state.fPhone;
        noiDung += " / thong bao nhan duoc la" + this.state.fMess;
        noiDung += "/ ngay nhan duoc la " + this.state.fNgay;
        noiDung += " / anh nhan duoc la" + this.state.fAnh;
        return noiDung;
    
    }

    render() {
        if (this.state.isRedirect){
            console.log(this.getGiaTri());
            return <Redirect to ="/" />
        }
        return (
            <div>
                <div className="container">
                    <h1>Trang liên hệ</h1>
                    <section className="page-section" id="contact">
                        <div className="container">
                            {/* Contact Section Heading*/}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Nhập thông tin vào đây</h2>
                            {/* Icon Divider*/}
                            {/* Contact Section Form*/}
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-xl-7">
                                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                        {/* Name input*/}
                                        <div className="form-floating mb-3">
                                            <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" data-sb-can-submit="no" />
                                            <label htmlFor="name">Tên</label>
                                        </div>
                                        {/* Email address input*/}
                                        <div className="form-floating mb-3">
                                            <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no" />
                                            <label htmlFor="email">Email </label>
                                        </div>
                                        {/* Phone number input*/}
                                        <div className="form-floating mb-3">
                                            <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no" />
                                            <label htmlFor="phone">Số điện thoại </label>
                                        </div>
                                        {/* Message input*/}
                                        <div className="form-floating mb-3">
                                            <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" data-sb-can-submit="no" defaultValue={""} />
                                            <label htmlFor="message">Thông báo</label>
                                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>

                                        </div>
                                        <div className="form-floating mb-3">
                                            <select value={this.state.fNgay} className="form-select" name="fNgay" onChange={(event) => this.isChange(event)} >            
                                                <option value="thu3">Ngày thứ 3</option>
                                                <option value="thu5">Ngày thứ 5</option>
                                                <option value="thu7">Ngày thứ 7</option>
                                                <option value="chunhat">Ngày chủ nhật</option>
                                            </select>
                                        </div>


                                        <div className="form-floating mb-3">

                                        <input onChange={(event) => this.isFileChange(event)} type="file" class="form-control" name="fAnh" ></input>
                                        <label htmlFor="message">Chọn tệp</label>

                                    </div>


                                        <button className="btn btn-primary" onClick={(event) => this.submitForm(event)} id="submitButton" type="submit">Gửi</button>
                                    </form>
                                </div>
                            </div>
                        </div></section>
                </div>

            </div>
        );
    }
}

export default Contact;

//   event.preventDefault();  prevent = ngăn chặn ddefault mặc định là ngăn chặn các thao tác mặc định