'use client'
import { useTheme } from '@/components/themeProvider';
import { clientSideFunction } from '@/utils/client-utils';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


export default function ClientRoutePage() {
  const result=clientSideFunction();

  const theme=useTheme()
  const settings = {
        dots: true,
      };
      return (
       
      <h1>result </h1>)
    }