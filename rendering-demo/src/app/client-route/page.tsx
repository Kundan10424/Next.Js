"use client"

// import { serverSideFunction } from "@/src/utils/server-utils";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useTheme} from "@/src/components/theme-provider"
import { clientSideFunction } from '@/src/utils/client-utils';

export default function ClientRoute() {
  const theme = useTheme()
  const result = clientSideFunction()
  const settings = {
    dots: true,
  };
  return (
    <>

    <h1 style={{color: theme.colors.secondary}}>Client Route Page</h1>
    <p>{result}</p>

       <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
    </>
   
  );
}

