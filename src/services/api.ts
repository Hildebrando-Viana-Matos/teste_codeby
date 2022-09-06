import axios from 'axios';

export const apiAbove10 = axios.create({
  baseURL: "https://teste-codeby-api.vercel.app/acima-10-reais.json"
});

export const apiBelow10 = axios.create({
  baseURL: "https://teste-codeby-api.vercel.app/abaixo-10-reais.json"
})
