import axios from 'axios';

export const apiAbove10 = axios.create({
  baseURL: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220905T233643Z&X-Amz-Expires=86400&X-Amz-Signature=ed11ad0c9e585f60be2d8d8c7b48cbbf990d0cbc28ade94ac9127888eaa6592a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22&x-id=GetObject"
});

export const apiBelow10 = axios.create({
  baseURL: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220906T003225Z&X-Amz-Expires=86400&X-Amz-Signature=71874ed9c683889d29731a5fd4deee7b6d083e814321599a7298a4666dc0b8c0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22&x-id=GetObject"
})
