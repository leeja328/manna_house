import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Header from '../landing_page/header';
import Footer from '../landing_page/footer';
import './Order.css';
import emailjs from '@emailjs/browser';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import rice1 from '../images/rice1.png';
import rice2 from '../images/rice2.jpg';
import rice3 from '../images/rice3.jpg';
import rice4 from '../images/rice4.jpg';
import rice5 from '../images/rice5.jpg';
import rice6 from '../images/rice6.jpg';
import rice7 from '../images/rice7.png';
import rice8 from '../images/rice8.jpg';
import rice9 from '../images/rice9.jpg';

// install for mui npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material

// make sure to install emailjs browser by doing npm i '@emailjs/browser'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function Order() {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm('service_e8rooom', 'template_xnozmqc', form.current, 'n3uzUjJcdJGIIN9PC')
      .then((result) => {
          console.log(result.text);
          // navigate ('/contact_reply');
      }, (error) => {
          console.log(error.text);
      });
  };

  const [open, setOpen] = React.useState(false);

  const [num, setNum] = useState(0);

  const [num1, setNum1] = useState(0);

  const [num2, setNum2] = useState(0);

  const [num3, setNum3] = useState(0);

  const [num4, setNum4] = useState(0);

  const [num5, setNum5] = useState(0);

  const [num6, setNum6] = useState(0);

  const [num7, setNum7] = useState(0);

  const [num8, setNum8] = useState(0);

  const [summary, setSummary] = useState('');

  const [total, setTotal] = useState(0);

  const [name1, setName1] = useState('');

  const [phone1, setPhone1] = useState('');

  const [validate, setValidate] = useState();

  const [validate2, setValidate2] = useState();

  const [empty_order, setEmpty_order] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
    //order summary
    let first = ''
    if (num > 0) {
      first = '백미 가래떡/White Rice Sticks: $35 x ' + num + ' = $' + (num * 35) + '\n';
    }

    let second = ''
    if (num1 > 0) {
      second = '현미 가래떡/Brown Rice Sticks: $45 x ' + num1 + ' = $' + (num1 * 45) + '\n';
    }

    let third = ''
    if (num2 > 0) {
      third = '쑥 가래떡/Mugwort Sticks: $40 x ' + num2 + ' = $' + (num2 * 40) + '\n';
    }

    let fourth = ''
    if (num3 > 0) {
      fourth = '백미 절편/JulPyeun White Rice: $45 x ' + num3 + ' = $' + (num3 * 45) + '\n';
    }

    let fifth = ''
    if (num4 > 0) {
      fifth = '쑥 절편/Mugwort: $50 x ' + num4 + ' = $' + (num4 * 50) + '\n';
    }

    let sixth = ''
    if (num5 > 0) {
      sixth = '떡복이 떡/Dukbokki: $35 x ' + num5 + ' = $' + (num5 * 35) + '\n';
    }

    let seventh = ''
    if (num6 > 0) {
      seventh = '떡국떡(백미)/Dukkook: $40 x ' + num6 + ' = $' + (num6 * 40) + '\n';
    }

    let eight = ''
    if (num7 > 0) {
      eight = '떡국떡(현미)/Dukkook Brown Rice: $45 x ' + num7 + ' = $' + (num7 * 45) + '\n';
    }

    let nine = ''
    if (num8 > 0) {
      nine = '찰 시루떡/Red Bean Duk: $45 x ' + num8 + ' = $' + (num8 * 45) + '\n';
    }
    setSummary(first + second + third + fourth + fifth + sixth + seventh + eight + nine)
      //total calculation
      let onenum = 0
      let twonum = 0
      let threenum = 0
      let fournum = 0
      let fivenum = 0
      let sixnum = 0
      let sevennum = 0
      let eightnum = 0
      let ninenum = 0

      if (num > 0) {
        onenum = num*35
      }
      if (num1 > 0) {
        twonum = num1*45
      }
      if (num2 > 0) {
        threenum = num2*40
      }
      if (num3 > 0) {
        fournum = num3*45
      }
      if (num4 > 0) {
        fivenum = num4*50
      }
      if (num5 > 0) {
        sixnum = num5*35
      }
      if (num6 > 0) {
        sevennum = num6*40
      }
      if (num7 > 0) {
        eightnum = num7*45
      }
      if (num8 > 0) {
        ninenum = num8*45
      }

      setTotal(onenum + twonum + threenum + fournum + fivenum + sixnum + sevennum + eightnum + ninenum);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    if (event.target.name === 'phone') {
      setPhone1(event.target.value);
    } else if (event.target.name === 'name') {
      setName1(event.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name1 === '') {
      setValidate(true)
      console.log('error')
      return; // Exit early if validation fails
    } else {
      setValidate(false)
      console.log('success')
    }

    if (phone1 === '') {
      setValidate2(true)
      console.log('error2')
      return; // Exit early if validation fails
    } else {
      setValidate2(false)
      console.log('success2')
    }

    if (total === 0) {
      return;
    }

    sendEmail(e);
  };

  useEffect(() => {
    // Check if total is equal to 0
    if (total === 0) {
      setEmpty_order('*Cart Empty!');
    } else {
      setEmpty_order('');
    }
  }, [total]);

  const plusOne = () => {
    if (num < 10) {setNum(num + 1)}
  };

  const minusOne = () => {
    if (num !== 0) {
      setNum(num - 1)}
  };

  const plusOne1 = () => {
    if (num1 < 10) {setNum1(num1 + 1)}
  };

  const minusOne1 = () => {
    if (num1 !== 0) {
      setNum1(num1 - 1)}
  };

  const plusOne2 = () => {
    if (num2 < 10) {setNum2(num2 + 1)}
  };

  const minusOne2 = () => {
    if (num2 !== 0) {
      setNum2(num2 - 1)}
  }

  const plusOne3 = () => {
    if (num3 < 10) {setNum3(num3 + 1)}
  };

  const minusOne3 = () => {
    if (num3 !== 0) {
      setNum3(num3 - 1)}
  };

  const plusOne4 = () => {
    if (num4 < 10) {setNum4(num4 + 1)}
  };

  const minusOne4 = () => {
    if (num4 !== 0) {
      setNum4(num4 - 1)}
  };

  const plusOne5 = () => {
    if (num5 < 10) {setNum5(num5 + 1)}
  };

  const minusOne5 = () => {
    if (num5 !== 0) {
      setNum5(num5 - 1)}
  };

  const plusOne6 = () => {
    if (num6 < 10) {setNum6(num6 + 1)}
  };

  const minusOne6 = () => {
    if (num6 !== 0) {
      setNum6(num6 - 1)}
  };

  const plusOne7 = () => {
    if (num7 < 10) {setNum7(num7 + 1)}
  };

  const minusOne7 = () => {
    if (num7 !== 0) {
      setNum7(num7 - 1)}
  };

  const plusOne8 = () => {
    if (num8 < 10) {setNum8(num8 + 1)}
  };

  const minusOne8 = () => {
    if (num8 !== 0) {
      setNum8(num8 - 1)}
  };

  return (
    <>
    <Header />
    <div className='order-container'>
    <div className='order-header'>
      <h1 id='order-header-text'>원하는 상품의 수량을 선택한 후 하단 장바구니로 결제하세요. Select the quantity of each desired item and then checkout with your <ShoppingCartIcon/> cart at the bottom:</h1>
    </div>
    <div className='order-body'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={rice1}
          title="rice"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          백미 가래떡/White Rice Sticks ($35)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            These rice sticks have a soft chewy texture, made from white rice. They taste great steamed or pan-fried and eaten with honey or plain. It comes in a tray with 24 sticks, approx. 8.5lbs
          </Typography>
        </CardContent>
        <CardActions className='buttons'>
          <Button id='button1' size="large" onClick={minusOne}>-</Button>
          <h3><strong>{num}</strong></h3>
          <Button id='button2' size="small" onClick={plusOne}>+</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice2}
            alt="rice stick"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            현미 가래떡/Brown Rice Sticks ($40)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is similar to the white rice sticks just made with brown rice instead. 
            </Typography>
          </CardContent>
          <CardActions>
          <Button id='button1' size="large" onClick={minusOne1}>-</Button>
          <h3><strong>{num1}</strong></h3>
          <Button id='button2' size="small" onClick={plusOne1}>+</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice3}
            alt="mugwort"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            쑥 가래떡/Mugwort sticks ($40)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              These are similar to white rice sticks just made with a Mugwort herb. Mugwort is great for the digestive system and high-blood pressure. It has a tart flavor similar to juniper or mint.
            </Typography>
          </CardContent>
          <CardActions>
          <Button id='button1' size="large" onClick={minusOne2}>-</Button>
          <h3><strong>{num2}</strong></h3>
          <Button id='button2' size="small" onClick={plusOne2}>+</Button>
          </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice4}
            alt="julpyeun"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            백미 절편/JulPyeun white rice ($45)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              These have a chewy texture that are great to eat plain or with honey. They have a much flatter shape compared to the rice sticks. They come in a tray about 8.5 lbs
            </Typography>
          </CardContent>
            <CardActions>
              <Button id='button1' size="large" onClick={minusOne3}>-</Button>
              <h3><strong>{num3}</strong></h3>
              <Button id='button2' size="small" onClick={plusOne3}>+</Button>
            </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice5}
            alt="mugwort"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            쑥 절편/Mugwort  ($50)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              These are similar to their white rice version just with Mugwort herb. Mugwort is great for the digestive system and high-blood pressure. It has a tart flavor similar to juniper or mint.
            </Typography>
          </CardContent>
          <CardActions>
              <Button id='button1' size="large" onClick={minusOne4}>-</Button>
              <h3><strong>{num4}</strong></h3>
              <Button id='button2' size="small" onClick={plusOne4}>+</Button>
            </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice6}
            alt="Dukbokki"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            떡복이 떡/Dukbokki ($35)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dukbokki is a very popular korean dish that is made with red pepper sauce and a assortment of vegatables, as well as fish cakes. They are loved for their chewy texture with this hot sauce. They come in a tray approx 8.5lbs
            </Typography>
          </CardContent>
          <CardActions>
              <Button id='button1' size="large" onClick={minusOne5}>-</Button>
              <h3><strong>{num5}</strong></h3>
              <Button id='button2' size="small" onClick={plusOne5}>+</Button>
            </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice7}
            alt="Dukkook"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            떡국떡(백미)/Dukkook ($40)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dukkook is a popular korean soup eaten to celebrate new years but can be eaten at anytime. It can also be eaten pan fried with honey or hot sauce. Comes in 2 bags approx 4.2lbs each.
            </Typography>
          </CardContent>
          <CardActions>
              <Button id='button1' size="large" onClick={minusOne6}>-</Button>
              <h3><strong>{num6}</strong></h3>
              <Button id='button2' size="small" onClick={plusOne6}>+</Button>
            </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice8}
            alt="dukkook"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            떡국떡(현미)/Dukkook Brown Rice ($45)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the same as the white rice version just made with brown rice instead. 
            </Typography>
          </CardContent>
          <CardActions>
              <Button id='button1' size="large" onClick={minusOne7}>-</Button>
              <h3><strong>{num7}</strong></h3>
              <Button id='button2' size="small" onClick={plusOne7}>+</Button>
            </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={rice9}
            alt="red bean"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            찰 시루떡/Red Bean Duk ($45)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a rice cake covered with red bean on the outside to make it easier to handle and eat. The red bean has a slight sweet flavor and adds a great contrast to the sticky middle. This comes in a tray approx 5.5lbs
            </Typography>
          </CardContent>
          <CardActions>
              <Button id='button1' size="large" onClick={minusOne8}>-</Button>
              <h3><strong>{num8}</strong></h3>
              <Button id='button2' size="small" onClick={plusOne8}>+</Button>
            </CardActions>
      </Card>
    </div>
    <div className='order-bottom2'>
      <h5>*실제 제품은 사진과 약간 다를 수 있습니다 / *actual product may slightly vary from picture</h5>
    </div>
    <div className='order-bottom'>
      <Button id='cart-button' onClick={handleClickOpen}><ShoppingCartIcon/>Cart</Button>
    </div>
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      <form ref={form} onSubmit={handleSubmit}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        주문 요약/Order Summary
        </DialogTitle>
        <IconButton
          id='x-button'
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div className='input-form'>
        
          <TextField
          error={validate}
          label="*필수의/*required"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '37ch'}}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">이름/Name:</InputAdornment>,
          }}
          name='name'
          />
          <TextField
          error={validate2}
          label="*필수의/*required"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '37ch' }}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">전화/Phone:</InputAdornment>,
          }}
          name='phone'
          />
          <TextField
          label="영수증을 위해/to recieve receipt"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '37ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">이메일/Email:</InputAdornment>,
          }}
          name='email'
          />
          <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: '37ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">주소/Address/Location:</InputAdornment>,
          }}
          name='address'
          />
        </div>
        <div className='order-summary'>
          <Typography gutterBottom>
            <pre>
              {summary}
            </pre>
          </Typography>
          <Typography gutterBottom id='order-total'>
            
          주문 총액 / Order Total: ${total}
            <h5 id='validate'>{empty_order}</h5>
          </Typography>
        </div>
        </DialogContent>
        
        <DialogActions>
          <Button type='submit' autoFocus id='place-order'>
          주문하기/Place Order
          </Button>
        </DialogActions>
        <textarea name="my_html" id="hidden-summary" cols="30" rows="10">
            {summary}
        </textarea>
        <textarea name="total" cols="30" rows="10" id="hidden-summary">
          {total}
        </textarea>
        </form>
      </BootstrapDialog>
    </React.Fragment>
    </div>
    <Footer />
    </>
  )
}

export default Order