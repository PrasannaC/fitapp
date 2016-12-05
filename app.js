var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var initialData = [{
        "name": "Archana Chavan",
        "gender": "F",
        "height": 164,
        "age": 29,
        "data": [{
            "weight": 60.7,
            "fat": 31.6,
            "vfat": 4,
            "rm": 1278,
            "bmi": 22.6,
            "bodyage": 37,
            "subc_body": 26.5,
            "subc_trunk": 24.9,
            "subc_arms": 44.3,
            "subc_legs": 39.3,
            "skel_body": 25.5,
            "skel_trunk": 20.1,
            "skel_arms": 27,
            "skel_legs": 37.9
        }]
    },
    {
        "name": "Bhavana Bangar",
        "gender": "F",
        "height": 149,
        "age": 22,
        "data": [{
            "weight": 38.1,
            "fat": 31.5,
            "vfat": 1,
            "rm": 930,
            "bmi": 17.2,
            "bodyage": 18,
            "subc_body": 22.5,
            "subc_trunk": 20.3,
            "subc_arms": 43.7,
            "subc_legs": 34.8,
            "skel_body": 25,
            "skel_trunk": 21.4,
            "skel_arms": 31.4,
            "skel_legs": 33.6
        }]
    },
    {
        "name": "Deepti Chandel",
        "gender": "F",
        "height": "",
        "age": "",
        "data": [{
            "weight": "",
            "fat": "",
            "vfat": "",
            "rm": "",
            "bmi": "",
            "bodyage": "",
            "subc_body": "",
            "subc_trunk": "",
            "subc_arms": "",
            "subc_legs": "",
            "skel_body": "",
            "skel_trunk": "",
            "skel_arms": "",
            "skel_legs": ""
        }]
    },
    {
        "name": "Dhanashree Dhotrikar",
        "gender": "F",
        "height": 158,
        "age": 24,
        "data": [{
            "weight": 55,
            "fat": 33.6,
            "vfat": 3.5,
            "rm": 1181,
            "bmi": 22,
            "bodyage": 32,
            "subc_body": 27.1,
            "subc_trunk": 24,
            "subc_arms": "47..2",
            "subc_legs": 41.6,
            "skel_body": 24.4,
            "skel_trunk": 19.8,
            "skel_arms": 27,
            "skel_legs": 35.8
        }]
    },
    {
        "name": "Jyoti Khedkar",
        "gender": "F",
        "height": "",
        "age": "",
        "data": [{
            "weight": "",
            "fat": "",
            "vfat": "",
            "rm": "",
            "bmi": "",
            "bodyage": "",
            "subc_body": "",
            "subc_trunk": "",
            "subc_arms": "",
            "subc_legs": "",
            "skel_body": "",
            "skel_trunk": "",
            "skel_arms": "",
            "skel_legs": ""
        }]
    },
    {
        "name": "Kalyani Pawar",
        "gender": "F",
        "height": 170,
        "age": 24,
        "data": [{
            "weight": 66.1,
            "fat": 24.8,
            "vfat": 1,
            "rm": 1404,
            "bmi": 22.9,
            "bodyage": 30,
            "subc_body": 23.3,
            "subc_trunk": 18.5,
            "subc_arms": 35.2,
            "subc_legs": 32.1,
            "skel_body": 30,
            "skel_trunk": 23.4,
            "skel_arms": 31.1,
            "skel_legs": 45.3
        }]
    },
    {
        "name": "Khusbhoo Singh",
        "gender": "F",
        "height": 161,
        "age": 25,
        "data": [{
            "weight": 52.4,
            "fat": 33.8,
            "vfat": 2.5,
            "rm": 1142,
            "bmi": 20.2,
            "bodyage": 30,
            "subc_body": 25.9,
            "subc_trunk": 23.4,
            "subc_arms": 47.5,
            "subc_legs": 40.5,
            "skel_body": 24.7,
            "skel_trunk": 20.3,
            "skel_arms": 27.9,
            "skel_legs": 35
        }]
    },
    {
        "name": "Kirti Kumbhare",
        "gender": "F",
        "height": 164,
        "age": 36,
        "data": [{
            "weight": 76.1,
            "fat": 36.4,
            "vfat": 9,
            "rm": 1489,
            "bmi": 28.3,
            "bodyage": 53,
            "subc_body": 33.1,
            "subc_trunk": 29,
            "subc_arms": 49.3,
            "subc_legs": 45.6,
            "skel_body": 23.9,
            "skel_trunk": 17.3,
            "skel_arms": 21.7,
            "skel_legs": 37.7
        }]
    },
    {
        "name": "Kshitija Tilekar",
        "gender": "F",
        "height": 164,
        "age": 22,
        "data": [{
            "weight": 70.2,
            "fat": 34.8,
            "vfat": 6,
            "rm": 1409,
            "bmi": 26.1,
            "bodyage": 40,
            "subc_body": 30.6,
            "subc_trunk": 26.8,
            "subc_arms": 48.7,
            "subc_legs": 45.3,
            "skel_body": 24.5,
            "skel_trunk": 18.8,
            "skel_arms": 23.7,
            "skel_legs": 37.5
        }]
    },
    {
        "name": "Lakshmi Ranganathan",
        "gender": "F",
        "height": 164,
        "age": 37,
        "data": [{
            "weight": 67.1,
            "fat": 34.7,
            "vfat": 6.5,
            "rm": 1360,
            "bmi": 24.9,
            "bodyage": 50,
            "subc_body": 29.8,
            "subc_trunk": 26.2,
            "subc_arms": 47.3,
            "subc_legs": 42.2,
            "skel_body": 24.2,
            "skel_trunk": 18.2,
            "skel_arms": 24,
            "skel_legs": 36.7
        }]
    },
    {
        "name": "Neelam Pawar",
        "gender": "F",
        "height": 161,
        "age": 28,
        "data": [{
            "weight": 54.8,
            "fat": 33.2,
            "vfat": 3,
            "rm": 1180,
            "bmi": 21.1,
            "bodyage": 34,
            "subc_body": 26.3,
            "subc_trunk": 23.4,
            "subc_arms": 46.6,
            "subc_legs": 40.3,
            "skel_body": 24.7,
            "skel_trunk": 20,
            "skel_arms": 27.3,
            "skel_legs": 35.9
        }]
    },
    {
        "name": "Neelam Rajput",
        "gender": "F",
        "height": 158,
        "age": 25,
        "data": [{
            "weight": 48.3,
            "fat": 24.5,
            "vfat": 1.5,
            "rm": 1110,
            "bmi": 19.3,
            "bodyage": 22,
            "subc_body": 20.6,
            "subc_trunk": 16.5,
            "subc_arms": 36,
            "subc_legs": 31.7,
            "skel_body": 27.7,
            "skel_trunk": 23.1,
            "skel_arms": 32.2,
            "skel_legs": 39.9
        }]
    },
    {
        "name": "Pallavi Mote",
        "gender": "F",
        "height": 161,
        "age": 25,
        "data": [{
            "weight": 48.7,
            "fat": 14,
            "vfat": 0.5,
            "rm": 1161,
            "bmi": 18.8,
            "bodyage": 18,
            "subc_body": 13,
            "subc_trunk": 9.1,
            "subc_arms": 23.7,
            "subc_legs": 23,
            "skel_body": 33.4,
            "skel_trunk": 28,
            "skel_arms": 38.9,
            "skel_legs": 49.1
        }]
    },
    {
        "name": "Preeti Lamba",
        "gender": "F",
        "height": 164,
        "age": 27,
        "data": [{
            "weight": 74.8,
            "fat": 33.3,
            "vfat": 5.5,
            "rm": 1491,
            "bmi": 27.8,
            "bodyage": 44,
            "subc_body": 31.1,
            "subc_trunk": 26.6,
            "subc_arms": 45.2,
            "subc_legs": 42.2,
            "skel_body": 25.7,
            "skel_trunk": 19,
            "skel_arms": 24.2,
            "skel_legs": 40.8
        }]
    },
    {
        "name": "Priya Kondekar",
        "gender": "F",
        "height": 158,
        "age": 27,
        "data": [{
            "weight": 70.6,
            "fat": 33.7,
            "vfat": 8.5,
            "rm": 1421,
            "bmi": 28.3,
            "bodyage": 44,
            "subc_body": 31.7,
            "subc_trunk": 27.1,
            "subc_arms": 45.9,
            "subc_legs": 43.2,
            "skel_body": 24.9,
            "skel_trunk": 18.6,
            "skel_arms": 24.2,
            "skel_legs": 38.7
        }]
    },
    {
        "name": "Reshma Chavan",
        "gender": "F",
        "height": 158,
        "age": 27,
        "data": [{
            "weight": 41.7,
            "fat": 19.4,
            "vfat": 0.5,
            "rm": 1020,
            "bmi": 16.7,
            "bodyage": 18,
            "subc_body": 16.1,
            "subc_trunk": 11.8,
            "subc_arms": 30.3,
            "subc_legs": 26.5,
            "skel_body": 29.2,
            "skel_trunk": 25.1,
            "skel_arms": 35.5,
            "skel_legs": 39.8
        }]
    },
    {
        "name": "Rupali Patil",
        "gender": "F",
        "height": 161,
        "age": 31,
        "data": [{
            "weight": 63.9,
            "fat": 33.3,
            "vfat": 5.5,
            "rm": 1318,
            "bmi": 24.7,
            "bodyage": 43,
            "subc_body": 28.8,
            "subc_trunk": 25.1,
            "subc_arms": 46,
            "subc_legs": 41.6,
            "skel_body": 24.7,
            "skel_trunk": 19,
            "skel_arms": 25.3,
            "skel_legs": 37.6
        }]
    },
    {
        "name": "Sheetal Mhetre",
        "gender": "F",
        "height": 161,
        "age": 23,
        "data": [{
            "weight": 58.2,
            "fat": 29,
            "vfat": 3.5,
            "rm": 1250,
            "bmi": 22.5,
            "bodyage": 31,
            "subc_body": 25.1,
            "subc_trunk": 21.1,
            "subc_arms": 41.3,
            "subc_legs": 37.3,
            "skel_body": 26.4,
            "skel_trunk": 21.2,
            "skel_arms": 28.7,
            "skel_legs": 38.8
        }]
    },
    {
        "name": "Shruti Ghanekar",
        "gender": "F",
        "height": 161,
        "age": 27,
        "data": [{
            "weight": 54,
            "fat": 29.8,
            "vfat": 3,
            "rm": 1181,
            "bmi": 20.8,
            "bodyage": 30,
            "subc_body": 24.3,
            "subc_trunk": 20.9,
            "subc_arms": 42.3,
            "subc_legs": 36.9,
            "skel_body": 25.9,
            "skel_trunk": 21.1,
            "skel_arms": 29,
            "skel_legs": 37
        }]
    },
    {
        "name": "Shweta Majgaonkar",
        "gender": "F",
        "height": 152,
        "age": 25,
        "data": [{
            "weight": 59.3,
            "fat": 35.7,
            "vfat": 6.5,
            "rm": 1235,
            "bmi": 25.7,
            "bodyage": 40,
            "subc_body": 30.8,
            "subc_trunk": 27.2,
            "subc_arms": 49.7,
            "subc_legs": 45.7,
            "skel_body": 23.2,
            "skel_trunk": 18.2,
            "skel_arms": 24.6,
            "skel_legs": 36
        }]
    },
    {
        "name": "Shweta Mate",
        "gender": "F",
        "height": 161,
        "age": 22,
        "data": [{
            "weight": 52.3,
            "fat": 29.6,
            "vfat": 2,
            "rm": 1156,
            "bmi": 20.2,
            "bodyage": 25,
            "subc_body": 23.7,
            "subc_trunk": 20.4,
            "subc_arms": 42.4,
            "subc_legs": 37,
            "skel_body": 26.1,
            "skel_trunk": 21.6,
            "skel_arms": 29.6,
            "skel_legs": 37.5
        }]
    },
    {
        "name": "Sonali Khamkar",
        "gender": "F",
        "height": 164,
        "age": 23,
        "data": [{
            "weight": 54.1,
            "fat": 27.9,
            "vfat": 2,
            "rm": 1191,
            "bmi": 20.1,
            "bodyage": 25,
            "subc_body": 22.9,
            "subc_trunk": 19.3,
            "subc_arms": 40.4,
            "subc_legs": 35.4,
            "skel_body": 26.9,
            "skel_trunk": 22.1,
            "skel_arms": 30.1,
            "skel_legs": 38.3
        }]
    },
    {
        "name": "Sunanda Behera",
        "gender": "F",
        "height": 155,
        "age": 27,
        "data": [{
            "weight": 52.5,
            "fat": 28.5,
            "vfat": 3.5,
            "rm": 1160,
            "bmi": 21.9,
            "bodyage": 31,
            "subc_body": 24.5,
            "subc_trunk": 20.5,
            "subc_arms": 40.5,
            "subc_legs": 36.1,
            "skel_body": 26,
            "skel_trunk": 21,
            "skel_arms": 29.3,
            "skel_legs": 38.5
        }]
    },
    {
        "name": "Vaishali Lokhande",
        "gender": "F",
        "height": 161,
        "age": 25,
        "data": [{
            "weight": 54.8,
            "fat": 33.5,
            "vfat": 3,
            "rm": 1179,
            "bmi": 21.1,
            "bodyage": 32,
            "subc_body": 26.4,
            "subc_trunk": 23.6,
            "subc_arms": 47.2,
            "subc_legs": 41,
            "skel_body": 24.7,
            "skel_trunk": 20.1,
            "skel_arms": 27.3,
            "skel_legs": 36
        }]
    },
    {
        "name": "Abhishek Patil",
        "gender": "M",
        "height": 176,
        "age": 26,
        "data": [{
            "weight": 73.9,
            "fat": 22,
            "vfat": 8,
            "rm": 1678,
            "bmi": 24.7,
            "bodyage": 37,
            "subc_body": 15.5,
            "subc_trunk": 13.9,
            "subc_arms": 22,
            "subc_legs": 21.6,
            "skel_body": 33.4,
            "skel_trunk": 26.5,
            "skel_arms": 38.8,
            "skel_legs": 50.6
        }]
    },
    {
        "name": "Ajit Dhaigude",
        "gender": "M",
        "height": 164,
        "age": 28,
        "data": [{
            "weight": 61.6,
            "fat": 26.6,
            "vfat": 7,
            "rm": 1452,
            "bmi": 22.9,
            "bodyage": 34,
            "subc_body": 18,
            "subc_trunk": 16,
            "subc_arms": 26.7,
            "subc_legs": 26.7,
            "skel_body": 31,
            "skel_trunk": 23.4,
            "skel_arms": 38.3,
            "skel_legs": 48.4
        }]
    },
    {
        "name": "Akshay Jadhav",
        "gender": "M",
        "height": 173,
        "age": 21,
        "data": [{
            "weight": 70,
            "fat": 21.1,
            "vfat": 6.5,
            "rm": 1620,
            "bmi": 23.4,
            "bodyage": 31,
            "subc_body": 14.7,
            "subc_trunk": 13,
            "subc_arms": 21.9,
            "subc_legs": 21.4,
            "skel_body": 34,
            "skel_trunk": 27.3,
            "skel_arms": 39.1,
            "skel_legs": 51.2
        }]
    },
    {
        "name": "Amit Duseja",
        "gender": "M",
        "height": 179,
        "age": 31,
        "data": [{
            "weight": 54.6,
            "fat": 24,
            "vfat": 1.5,
            "rm": 1362,
            "bmi": 17,
            "bodyage": 18,
            "subc_body": 15.5,
            "subc_trunk": 13,
            "subc_arms": 23.1,
            "subc_legs": 23,
            "skel_body": 34.5,
            "skel_trunk": 26.8,
            "skel_arms": 40.6,
            "skel_legs": 51.7
        }]
    },
    {
        "name": "Amit Jain",
        "gender": "M",
        "height": 176,
        "age": 34,
        "data": [{
            "weight": 78.6,
            "fat": 22.7,
            "vfat": 9.5,
            "rm": 1750,
            "bmi": 25.4,
            "bodyage": 43,
            "subc_body": 16,
            "subc_trunk": 14.4,
            "subc_arms": 21.6,
            "subc_legs": 21.4,
            "skel_body": 33,
            "skel_trunk": 26,
            "skel_arms": 37.8,
            "skel_legs": 50.2
        }]
    },
    {
        "name": "Amol Kalbhor",
        "gender": "M",
        "height": 179,
        "age": 28,
        "data": [{
            "weight": 67,
            "fat": 20.6,
            "vfat": 4.5,
            "rm": 1574,
            "bmi": 20.8,
            "bodyage": 29,
            "subc_body": 14,
            "subc_trunk": 12.1,
            "subc_arms": 21.1,
            "subc_legs": 20.6,
            "skel_body": 34.5,
            "skel_trunk": 27.7,
            "skel_arms": 40,
            "skel_legs": 51.7
        }]
    },
    {
        "name": "Aniket Godse",
        "gender": "M",
        "height": 176,
        "age": 27,
        "data": [{
            "weight": 57.8,
            "fat": 15.1,
            "vfat": 2.5,
            "rm": 1444,
            "bmi": 18.7,
            "bodyage": 18,
            "subc_body": 10.2,
            "subc_trunk": 8.5,
            "subc_arms": 16.4,
            "subc_legs": 15.4,
            "skel_body": 36.5,
            "skel_trunk": 30.8,
            "skel_arms": 41.8,
            "skel_legs": 53.6
        }]
    },
    {
        "name": "Aniruddh Patil",
        "gender": "M",
        "height": 182,
        "age": 28,
        "data": [{
            "weight": 76.4,
            "fat": 22.8,
            "vfat": 7,
            "rm": 1717,
            "bmi": 23.1,
            "bodyage": 36,
            "subc_body": 15.7,
            "subc_trunk": 13.9,
            "subc_arms": 22.9,
            "subc_legs": 22.6,
            "skel_body": 33.5,
            "skel_trunk": 26.4,
            "skel_arms": 38.5,
            "skel_legs": 50.8
        }]
    },
    {
        "name": "Ashish Wadekar",
        "gender": "M",
        "height": 167,
        "age": 34,
        "data": [{
            "weight": 66.6,
            "fat": 25.2,
            "vfat": 8.5,
            "rm": 1535,
            "bmi": 23.9,
            "bodyage": 41,
            "subc_body": 17.3,
            "subc_trunk": 15.4,
            "subc_arms": 24.8,
            "subc_legs": 24.7,
            "skel_body": 30.9,
            "skel_trunk": 23.8,
            "skel_arms": 37.5,
            "skel_legs": 48.3
        }]
    },
    {
        "name": "Ashwin Chattar",
        "gender": "M",
        "height": 176,
        "age": 29,
        "data": [{
            "weight": 71.3,
            "fat": 23.9,
            "vfat": 7,
            "rm": 1626,
            "bmi": 23,
            "bodyage": 36,
            "subc_body": 16.3,
            "subc_trunk": 14.5,
            "subc_arms": 23.9,
            "subc_legs": 23.7,
            "skel_body": 32.7,
            "skel_trunk": 25.5,
            "skel_arms": 38.4,
            "skel_legs": 50
        }]
    },
    {
        "name": "Atul Chaskar",
        "gender": "M",
        "height": 176,
        "age": 27,
        "data": [{
            "weight": 58.3,
            "fat": 16.5,
            "vfat": 3,
            "rm": 1448,
            "bmi": 18.8,
            "bodyage": 19,
            "subc_body": 11.1,
            "subc_trunk": 9.3,
            "subc_arms": 17.6,
            "subc_legs": 16.7,
            "skel_body": 36,
            "skel_trunk": 30.1,
            "skel_arms": 41.1,
            "skel_legs": 53.2
        }]
    },
    {
        "name": "Atul Vernekar",
        "gender": "M",
        "height": 185,
        "age": 27,
        "data": [{
            "weight": 90.4,
            "fat": 22.8,
            "vfat": 9.5,
            "rm": 1953,
            "bmi": 26.1,
            "bodyage": 42,
            "subc_body": 16.2,
            "subc_trunk": 14.7,
            "subc_arms": 21.4,
            "subc_legs": 21.2,
            "skel_body": 34.3,
            "skel_trunk": 27,
            "skel_arms": 38.1,
            "skel_legs": 51.5
        }]
    },
    {
        "name": "Avinas Labade",
        "gender": "M",
        "height": 167,
        "age": 24,
        "data": [{
            "weight": 45.2,
            "fat": 11.1,
            "vfat": 0.5,
            "rm": 1243,
            "bmi": 16.2,
            "bodyage": 18,
            "subc_body": 7.3,
            "subc_trunk": 5.7,
            "subc_arms": 13.3,
            "subc_legs": 11.9,
            "skel_body": 37.7,
            "skel_trunk": 32.9,
            "skel_arms": 44,
            "skel_legs": 54.8
        }]
    },
    {
        "name": "Avinash Rangari",
        "gender": "M",
        "height": 164,
        "age": 27,
        "data": [{
            "weight": 71.1,
            "fat": 32.2,
            "vfat": 10.5,
            "rm": 1575,
            "bmi": 26.4,
            "bodyage": 44,
            "subc_body": 22.1,
            "subc_trunk": 20,
            "subc_arms": 33.1,
            "subc_legs": 33.5,
            "skel_body": 28.8,
            "skel_trunk": 20.2,
            "skel_arms": 36.6,
            "skel_legs": 46.3
        }]
    },
    {
        "name": "Avnish Dubey",
        "gender": "M",
        "height": 176,
        "age": 29,
        "data": [{
            "weight": 62.8,
            "fat": 12.1,
            "vfat": 3,
            "rm": 1542,
            "bmi": 21.2,
            "bodyage": 22,
            "subc_body": 8.6,
            "subc_trunk": 7.2,
            "subc_arms": 13.4,
            "subc_legs": 12.2,
            "skel_body": 37.5,
            "skel_trunk": 32.5,
            "skel_arms": 42.9,
            "skel_legs": 54.6
        }]
    },
    {
        "name": "Balvinder Singh",
        "gender": "M",
        "height": 173,
        "age": 32,
        "data": [{
            "weight": 89.7,
            "fat": 27,
            "vfat": 14.5,
            "rm": 1903,
            "bmi": 29.8,
            "bodyage": 51,
            "subc_body": 19.4,
            "subc_trunk": 17.9,
            "subc_arms": 25.1,
            "subc_legs": 25.4,
            "skel_body": 31.2,
            "skel_trunk": 23.5,
            "skel_arms": 35.8,
            "skel_legs": 48.6
        }]
    },
    {
        "name": "Bharat Talreja",
        "gender": "M",
        "height": 176,
        "age": 26,
        "data": [{
            "weight": 78,
            "fat": 23,
            "vfat": 8.5,
            "rm": 17.41,
            "bmi": 25.2,
            "bodyage": 39,
            "subc_body": 16.2,
            "subc_trunk": 14.6,
            "subc_arms": 22.8,
            "subc_legs": 22.5,
            "skel_body": 33.2,
            "skel_trunk": 26.1,
            "skel_arms": 38.3,
            "skel_legs": 50.4
        }]
    },
    {
        "name": "Bhushan Rathod",
        "gender": "M",
        "height": 170,
        "age": 30,
        "data": [{
            "weight": 77.9,
            "fat": 29.9,
            "vfat": 11.5,
            "rm": 1694,
            "bmi": 27,
            "bodyage": 47,
            "subc_body": 20.7,
            "subc_trunk": 18.8,
            "subc_arms": 30.1,
            "subc_legs": 30.4,
            "skel_body": 29.7,
            "skel_trunk": 21.5,
            "skel_arms": 35.9,
            "skel_legs": 47.1
        }]
    },
    {
        "name": "Devesh Sapkale",
        "gender": "M",
        "height": 176,
        "age": 22,
        "data": [{
            "weight": 77.4,
            "fat": 21.5,
            "vfat": 8,
            "rm": 1741,
            "bmi": 25,
            "bodyage": 36,
            "subc_body": 15.2,
            "subc_trunk": 13.7,
            "subc_arms": 21.5,
            "subc_legs": 21.1,
            "skel_body": 34,
            "skel_trunk": 27.1,
            "skel_arms": 38.8,
            "skel_legs": 51.2
        }]
    },
    {
        "name": "Kalpesh Borse",
        "gender": "M",
        "height": 173,
        "age": 30,
        "data": [{
            "weight": 68.7,
            "fat": 24.3,
            "vfat": 7,
            "rm": 1580,
            "bmi": 23,
            "bodyage": 36,
            "subc_body": 16.6,
            "subc_trunk": 14.7,
            "subc_arms": 24.3,
            "subc_legs": 24.1,
            "skel_body": 32.3,
            "skel_trunk": 25.1,
            "skel_arms": 38.4,
            "skel_legs": 49.6
        }]
    },
    {
        "name": "Keerthi Kandregula",
        "gender": "M",
        "height": "",
        "age": "",
        "data": [{
            "weight": "",
            "fat": "",
            "vfat": "",
            "rm": "",
            "bmi": "",
            "bodyage": "",
            "subc_body": "",
            "subc_trunk": "",
            "subc_arms": "",
            "subc_legs": "",
            "skel_body": "",
            "skel_trunk": "",
            "skel_arms": "",
            "skel_legs": ""
        }]
    },
    {
        "name": "Keval Agrawal",
        "gender": "M",
        "height": 179,
        "age": 22,
        "data": [{
            "weight": 85.1,
            "fat": 21.2,
            "vfat": 9.5,
            "rm": 1875,
            "bmi": 26.4,
            "bodyage": 38,
            "subc_body": 15.2,
            "subc_trunk": 13.8,
            "subc_arms": 20.2,
            "subc_legs": 19.9,
            "skel_body": 34.8,
            "skel_trunk": 27.9,
            "skel_arms": 38.4,
            "skel_legs": 52
        }]
    },
    {
        "name": "Kiran Bakwad",
        "gender": "M",
        "height": 170,
        "age": 28,
        "data": [{
            "weight": 74.1,
            "fat": 24.3,
            "vfat": 9.5,
            "rm": 1665,
            "bmi": 25.6,
            "bodyage": 40,
            "subc_body": 17,
            "subc_trunk": 15.4,
            "subc_arms": 24.2,
            "subc_legs": 24,
            "skel_body": 32,
            "skel_trunk": 24.8,
            "skel_arms": 37.7,
            "skel_legs": 49.3
        }]
    },
    {
        "name": "Lokesh Salunkhe",
        "gender": "M",
        "height": 173,
        "age": 30,
        "data": [{
            "weight": 76,
            "fat": 21.4,
            "vfat": 9.5,
            "rm": 1715,
            "bmi": 25.4,
            "bodyage": 40,
            "subc_body": 15.2,
            "subc_trunk": 13.7,
            "subc_arms": 20.7,
            "subc_legs": 20.3,
            "skel_body": 33.5,
            "skel_trunk": 26.8,
            "skel_arms": 38.1,
            "skel_legs": 50.7
        }]
    },
    {
        "name": "Manas Kulkarni",
        "gender": "M",
        "height": 164,
        "age": 26,
        "data": [{
            "weight": 45.3,
            "fat": 31.7,
            "vfat": 1.5,
            "rm": 1189,
            "bmi": 16.8,
            "bodyage": 18,
            "subc_body": 20,
            "subc_trunk": 17,
            "subc_arms": 27.8,
            "subc_legs": 28.6,
            "skel_body": 32.8,
            "skel_trunk": 23.4,
            "skel_arms": 39.8,
            "skel_legs": 50.1
        }]
    },
    {
        "name": "Mangesh Gulabrao",
        "gender": "M",
        "height": 176,
        "age": 34,
        "data": [{
            "weight": 68.4,
            "fat": 28.5,
            "vfat": 6.5,
            "rm": 1557,
            "bmi": 22.1,
            "bodyage": 39,
            "subc_body": 19,
            "subc_trunk": 16.8,
            "subc_arms": 28.1,
            "subc_legs": 28.3,
            "skel_body": 31.2,
            "skel_trunk": 23,
            "skel_arms": 37.6,
            "skel_legs": 48.5
        }]
    },
    {
        "name": "Mayur Kharat",
        "gender": "M",
        "height": 167,
        "age": 29,
        "data": [{
            "weight": 57,
            "fat": 16.4,
            "vfat": 4.5,
            "rm": 1419,
            "bmi": 20.4,
            "bodyage": 24,
            "subc_body": 11.3,
            "subc_trunk": 9.7,
            "subc_arms": 17.4,
            "subc_legs": 16.5,
            "skel_body": 34.7,
            "skel_trunk": 29.1,
            "skel_arms": 40.3,
            "skel_legs": 51.9
        }]
    },
    {
        "name": "Nikhil Sihare",
        "gender": "M",
        "height": 179,
        "age": 32,
        "data": [{
            "weight": 70.2,
            "fat": 21.9,
            "vfat": 6,
            "rm": 1618,
            "bmi": 21.9,
            "bodyage": 34,
            "subc_body": 15,
            "subc_trunk": 13.1,
            "subc_arms": 21.8,
            "subc_legs": 21.5,
            "skel_body": 33.6,
            "skel_trunk": 26.7,
            "skel_arms": 39.1,
            "skel_legs": 50.8
        }]
    },
    {
        "name": "Prabhata Raipurkar",
        "gender": "M",
        "height": 176,
        "age": 21,
        "data": [{
            "weight": 74.7,
            "fat": 21.1,
            "vfat": 7,
            "rm": 1699,
            "bmi": 24.1,
            "bodyage": 33,
            "subc_body": 14.8,
            "subc_trunk": 13.2,
            "subc_arms": 21.5,
            "subc_legs": 21.1,
            "skel_body": 34.2,
            "skel_trunk": 27.4,
            "skel_arms": 39.4,
            "skel_legs": 51.5
        }]
    },
    {
        "name": "Prasann Choudhari",
        "gender": "M",
        "height": 185,
        "age": 22,
        "data": [{
            "weight": 88.2,
            "fat": 24,
            "vfat": 8.5,
            "rm": 1908,
            "bmi": 25.8,
            "bodyage": 40,
            "subc_body": 16.9,
            "subc_trunk": 15.2,
            "subc_arms": 23.6,
            "subc_legs": 23.5,
            "skel_body": 33.6,
            "skel_trunk": 26.1,
            "skel_arms": 38.1,
            "skel_legs": 50.8
        }]
    },
    {
        "name": "Pratik Patade",
        "gender": "M",
        "height": 169,
        "age": 23,
        "data": [{
            "weight": 58,
            "fat": 22.8,
            "vfat": 4,
            "rm": 1416,
            "bmi": 20.3,
            "bodyage": 24,
            "subc_body": 15.3,
            "subc_trunk": 13.2,
            "subc_arms": 23.3,
            "subc_legs": 23,
            "skel_body": 33.5,
            "skel_trunk": 26.5,
            "skel_arms": 40.2,
            "skel_legs": 50.9
        }]
    },
    {
        "name": "Pravin Pawar",
        "gender": "M",
        "height": 179,
        "age": 28,
        "data": [{
            "weight": 76.6,
            "fat": 12.4,
            "vfat": 4.5,
            "rm": 1791,
            "bmi": 23.1,
            "bodyage": 28,
            "subc_body": 9.2,
            "subc_trunk": 8.1,
            "subc_arms": 11.7,
            "subc_legs": 10.7,
            "skel_body": 39.4,
            "skel_trunk": 33.8,
            "skel_arms": 43.1,
            "skel_legs": 56.4
        }]
    },
    {
        "name": "Rahul Salgar",
        "gender": "M",
        "height": 182,
        "age": 23,
        "data": [{
            "weight": 77.3,
            "fat": 19.5,
            "vfat": 6.5,
            "rm": 1754,
            "bmi": 23.3,
            "bodyage": 32,
            "subc_body": 13.7,
            "subc_trunk": 12.1,
            "subc_arms": 19.6,
            "subc_legs": 19.1,
            "skel_body": 35.3,
            "skel_trunk": 28.7,
            "skel_arms": 39.1,
            "skel_legs": 52.5
        }]
    },
    {
        "name": "Ravi Ranjan",
        "gender": "M",
        "height": "",
        "age": "",
        "data": [{
            "weight": "",
            "fat": "",
            "vfat": "",
            "rm": "",
            "bmi": "",
            "bodyage": "",
            "subc_body": "",
            "subc_trunk": "",
            "subc_arms": "",
            "subc_legs": "",
            "skel_body": "",
            "skel_trunk": "",
            "skel_arms": "",
            "skel_legs": ""
        }]
    },
    {
        "name": "Sachin Nagvekar",
        "gender": "M",
        "height": 176,
        "age": 39,
        "data": [{
            "weight": 79.7,
            "fat": 27.9,
            "vfat": 10.5,
            "rm": 1734,
            "bmi": 25.7,
            "bodyage": 49,
            "subc_body": 19.3,
            "subc_trunk": 17.4,
            "subc_arms": 26.9,
            "subc_legs": 27.1,
            "skel_body": 30.4,
            "skel_trunk": 22.6,
            "skel_arms": 37,
            "skel_legs": 47.8
        }]
    },
    {
        "name": "Sachin shevate",
        "gender": "M",
        "height": 167,
        "age": 35,
        "data": [{
            "weight": 53.2,
            "fat": 16.2,
            "vfat": 3.2,
            "rm": 1354,
            "bmi": 19.1,
            "bodyage": 23,
            "subc_body": 10.9,
            "subc_trunk": 9.2,
            "subc_arms": 16.7,
            "subc_legs": 15.9,
            "skel_body": 34.4,
            "skel_trunk": 28.9,
            "skel_arms": 40.6,
            "skel_legs": 51.6
        }]
    },
    {
        "name": "Sandeep Shinde",
        "gender": "M",
        "height": 173,
        "age": 30,
        "data": [{
            "weight": 67.4,
            "fat": 23,
            "vfat": 6.5,
            "rm": 1565,
            "bmi": 22.5,
            "bodyage": 35,
            "subc_body": 15.8,
            "subc_trunk": 13.9,
            "subc_arms": 23.1,
            "subc_legs": 22.8,
            "skel_body": 32.8,
            "skel_trunk": 25.8,
            "skel_arms": 38.9,
            "skel_legs": 50.1
        }]
    },
    {
        "name": "Sanket Khalekar",
        "gender": "M",
        "height": 176,
        "age": 25,
        "data": [{
            "weight": 74.4,
            "fat": 22.7,
            "vfat": 7.5,
            "rm": 1684,
            "bmi": 24,
            "bodyage": 36,
            "subc_body": 15.8,
            "subc_trunk": 14.1,
            "subc_arms": 22.9,
            "subc_legs": 22.6,
            "skel_body": 33.4,
            "skel_trunk": 26.3,
            "skel_arms": 38.2,
            "skel_legs": 50.6
        }]
    },
    {
        "name": "Shantanu Dabhade",
        "gender": "M",
        "height": 173,
        "age": 28,
        "data": [{
            "weight": 59.2,
            "fat": 31.4,
            "vfat": 4.5,
            "rm": 1405,
            "bmi": 19.8,
            "bodyage": 30,
            "subc_body": 20.5,
            "subc_trunk": 17.8,
            "subc_arms": 30.3,
            "subc_legs": 30.8,
            "skel_body": 31.5,
            "skel_trunk": 22.4,
            "skel_arms": 37.8,
            "skel_legs": 48.8
        }]
    },
    {
        "name": "Shashikant Chitalkar",
        "gender": "M",
        "height": 170,
        "age": 27,
        "data": [{
            "weight": 84.6,
            "fat": 25.8,
            "vfat": 13.5,
            "rm": 1827,
            "bmi": 29.3,
            "bodyage": 46,
            "subc_body": 18.6,
            "subc_trunk": 17.2,
            "subc_arms": 24.8,
            "subc_legs": 24.8,
            "skel_body": 31.5,
            "skel_trunk": 24,
            "skel_arms": 36.5,
            "skel_legs": 48.8
        }]
    },
    {
        "name": "Shreyas Dube",
        "gender": "M",
        "height": 176,
        "age": 24,
        "data": [{
            "weight": 77.5,
            "fat": 26.7,
            "vfat": 8.5,
            "rm": 1712,
            "bmi": 25,
            "bodyage": 39,
            "subc_body": 18.5,
            "subc_trunk": 16.6,
            "subc_arms": 27.2,
            "subc_legs": 27.2,
            "skel_body": 31.8,
            "skel_trunk": 24.8,
            "skel_arms": 38.1,
            "skel_legs": 49.1
        }]
    },
    {
        "name": "Swapnil Mande",
        "gender": "M",
        "height": 176,
        "age": 27,
        "data": [{
            "weight": 64.6,
            "fat": 13.6,
            "vfat": 4.5,
            "rm": 1567,
            "bmi": 20.9,
            "bodyage": 24,
            "subc_body": 9.6,
            "subc_trunk": 8.2,
            "subc_arms": 14.7,
            "subc_legs": 13.6,
            "skel_body": 37,
            "skel_trunk": 31.7,
            "skel_arms": 41.1,
            "skel_legs": 54.1
        }]
    },
    {
        "name": "Swapnil Menkudale",
        "gender": "M",
        "height": 182,
        "age": 27,
        "data": [{
            "weight": 87,
            "fat": 31.7,
            "vfat": 10,
            "rm": 1834,
            "bmi": 26.3,
            "bodyage": 47,
            "subc_body": 21.8,
            "subc_trunk": 19.7,
            "subc_arms": 32.7,
            "subc_legs": 33,
            "skel_body": 30,
            "skel_trunk": 21.2,
            "skel_arms": 36.5,
            "skel_legs": 47.4
        }]
    },
    {
        "name": "Tukaram Kalane",
        "gender": "M",
        "height": 167,
        "age": 26,
        "data": [{
            "weight": 67.3,
            "fat": 22.8,
            "vfat": 8,
            "rm": 1561,
            "bmi": 24.1,
            "bodyage": 35,
            "subc_body": 15.9,
            "subc_trunk": 14.2,
            "subc_arms": 23.2,
            "subc_legs": 22.9,
            "skel_body": 32.4,
            "skel_trunk": 25.6,
            "skel_arms": 38.4,
            "skel_legs": 49.7
        }]
    },
    {
        "name": "Tushar Joshi",
        "gender": "M",
        "height": 179,
        "age": 25,
        "data": [{
            "weight": 78.6,
            "fat": 25.8,
            "vfat": 8,
            "rm": 1736,
            "bmi": 24.5,
            "bodyage": 39,
            "subc_body": 17.8,
            "subc_trunk": 15.9,
            "subc_arms": 26.1,
            "subc_legs": 26,
            "skel_body": 32.3,
            "skel_trunk": 24.6,
            "skel_arms": 38.1,
            "skel_legs": 49.6
        }]
    },
    {
        "name": "Umesh Sutar",
        "gender": "M",
        "height": 173,
        "age": 29,
        "data": [{
            "weight": 69.7,
            "fat": 22.8,
            "vfat": 7,
            "rm": 1594,
            "bmi": 23.1,
            "bodyage": 35,
            "subc_body": 15.7,
            "subc_trunk": 13.9,
            "subc_arms": 22.9,
            "subc_legs": 22.6,
            "skel_body": 32.9,
            "skel_trunk": 25.9,
            "skel_arms": 38.2,
            "skel_legs": 50.1
        }]
    },
    {
        "name": "Vijay Patil",
        "gender": "M",
        "height": 182,
        "age": 26,
        "data": [{
            "weight": 68.8,
            "fat": 19.7,
            "vfat": 4.5,
            "rm": 1610,
            "bmi": 20.8,
            "bodyage": 27,
            "subc_body": 13.4,
            "subc_trunk": 11.6,
            "subc_arms": 20.4,
            "subc_legs": 19.8,
            "skel_body": 35,
            "skel_trunk": 28.4,
            "skel_arms": 40.4,
            "skel_legs": 52.2
        }]
    },
    {
        "name": "Vijay Udgiri",
        "gender": "M",
        "height": "",
        "age": "",
        "data": [{
            "weight": "",
            "fat": "",
            "vfat": "",
            "rm": "",
            "bmi": "",
            "bodyage": "",
            "subc_body": "",
            "subc_trunk": "",
            "subc_arms": "",
            "subc_legs": "",
            "skel_body": "",
            "skel_trunk": "",
            "skel_arms": "",
            "skel_legs": ""
        }]
    },
    {
        "name": "Vikram Pawar",
        "gender": "M",
        "height": 173,
        "age": 30,
        "data": [{
            "weight": 72.1,
            "fat": 25.9,
            "vfat": 8.5,
            "rm": 1625,
            "bmi": 24.4,
            "bodyage": 40,
            "subc_body": 17.9,
            "subc_trunk": 16,
            "subc_arms": 25.9,
            "subc_legs": 25.9,
            "skel_body": 31.5,
            "skel_trunk": 24,
            "skel_arms": 37.8,
            "skel_legs": 48.8
        }]
    },
    {
        "name": "Vinod Patil",
        "gender": "M",
        "height": 178,
        "age": 28,
        "data": [{
            "weight": 80.6,
            "fat": 27.7,
            "vfat": 9.5,
            "rm": 1755,
            "bmi": 25.4,
            "bodyage": 43,
            "subc_body": 19.1,
            "subc_trunk": 17.2,
            "subc_arms": 27.8,
            "subc_legs": 27.9,
            "skel_body": 31.3,
            "skel_trunk": 23.3,
            "skel_arms": 37.3,
            "skel_legs": 48.6
        }]
    },
    {
        "name": "Vishal Gaikwad",
        "gender": "M",
        "height": 178,
        "age": 28,
        "data": [{
            "weight": 90.3,
            "fat": 29.7,
            "vfat": 12.5,
            "rm": 1895,
            "bmi": 28.5,
            "bodyage": 50,
            "subc_body": 20.9,
            "subc_trunk": 19.1,
            "subc_arms": 29.6,
            "subc_legs": 29.9,
            "skel_body": 30.2,
            "skel_trunk": 21.9,
            "skel_arms": 36,
            "skel_legs": 47.6
        }]
    },
    {
        "name": "William Fernandes",
        "gender": "M",
        "height": 179,
        "age": 28,
        "data": [{
            "weight": 68.2,
            "fat": 19.6,
            "vfat": 4.5,
            "rm": 1599,
            "bmi": 21.3,
            "bodyage": 29,
            "subc_body": 13.4,
            "subc_trunk": 11.7,
            "subc_arms": 20,
            "subc_legs": 19.5,
            "skel_body": 34.8,
            "skel_trunk": 28.3,
            "skel_arms": 40.5,
            "skel_legs": 52
        }]
    },
    {
        "name": "Jnaneswar Baswani",
        "gender": "M",
        "height": 179,
        "age": 27,
        "data": [{
            "weight": 74.4,
            "fat": 18.1,
            "vfat": 6.5,
            "rm": 1711,
            "bmi": 23.2,
            "bodyage": 33,
            "subc_body": 12.8,
            "subc_trunk": 11.3,
            "subc_arms": 18,
            "subc_legs": 17.4,
            "skel_body": 35.5,
            "skel_trunk": 29.2,
            "skel_arms": 39.8,
            "skel_legs": 52.7
        }]
    },
    {
        "name": "Mangesh Choudhari",
        "gender": "M",
        "height": 170,
        "age": 30,
        "data": [{
            "weight": 63.7,
            "fat": 27,
            "vfat": 6.5,
            "rm": 1487,
            "bmi": 22,
            "bodyage": 35,
            "subc_body": 18.1,
            "subc_trunk": 15.9,
            "subc_arms": 26.8,
            "subc_legs": 26.9,
            "skel_body": 31.5,
            "skel_trunk": 23.7,
            "skel_arms": 38.3,
            "skel_legs": 48.8
        }]
    },
    {
        "name": "Joshi Apurva",
        "gender": "F",
        "height": 170,
        "age": 28,
        "data": [{
            "weight": 57.8,
            "fat": 26.8,
            "vfat": 2,
            "rm": 1256,
            "bmi": 20,
            "bodyage": 28,
            "subc_body": 22.1,
            "subc_trunk": 18.3,
            "subc_arms": 38.4,
            "subc_legs": 33.7,
            "skel_body": 27.8,
            "skel_trunk": 22.5,
            "skel_arms": 30.3,
            "skel_legs": 39.8
        }]
    },
    {
        "name": "Vina Nalwawade",
        "gender": "F",
        "height": 176,
        "age": 25,
        "data": [{
            "weight": 58.6,
            "fat": 26.8,
            "vfat": 1,
            "rm": 1270,
            "bmi": 18.9,
            "bodyage": 24,
            "subc_body": 21.4,
            "subc_trunk": 17.9,
            "subc_arms": 39.2,
            "subc_legs": 34.1,
            "skel_body": 28,
            "skel_trunk": 22.9,
            "skel_arms": 30.4,
            "skel_legs": 40
        }]
    },
    {
        "name": "Akshay Gadekar",
        "gender": "M",
        "height": 179,
        "age": 25,
        "data": [{
            "weight": 65.3,
            "fat": 17.8,
            "vfat": 4,
            "rm": 1561,
            "bmi": 20.4,
            "bodyage": 24,
            "subc_body": 12.2,
            "subc_trunk": 10.4,
            "subc_arms": 18.8,
            "subc_legs": 18.1,
            "skel_body": 35.8,
            "skel_trunk": 29.5,
            "skel_arms": 41.1,
            "skel_legs": 52.9
        }]
    },
    {
        "name": "Saurabh Yashwante",
        "gender": "M",
        "height": 180,
        "age": 28,
        "data": [{
            "weight": 65.5,
            "fat": 20.1,
            "vfat": "4,0",
            "rm": 1553,
            "bmi": 20.2,
            "bodyage": 27,
            "subc_body": 13.5,
            "subc_trunk": 11.6,
            "subc_arms": 20.6,
            "subc_legs": 20.1,
            "skel_body": 34.8,
            "skel_trunk": 28.1,
            "skel_arms": 40.3,
            "skel_legs": 52
        }]
    },
    {
        "name": "Govind Vhanshette",
        "gender": "M",
        "height": 170,
        "age": 26,
        "data": [{
            "weight": 63.5,
            "fat": 25,
            "vfat": 6,
            "rm": 1494,
            "bmi": 22,
            "bodyage": 32,
            "subc_body": 16.9,
            "subc_trunk": 14.8,
            "subc_arms": 25.2,
            "subc_legs": 25.1,
            "skel_body": 32.3,
            "skel_trunk": 24.9,
            "skel_arms": 39.2,
            "skel_legs": 49.6
        }]
    },
    {
        "name": "Manogya Gadgiu",
        "gender": "M",
        "height": 178,
        "age": 33,
        "data": [{
            "weight": 79,
            "fat": 24.9,
            "vfat": 9,
            "rm": 1744,
            "bmi": 24.9,
            "bodyage": 43,
            "subc_body": 17.3,
            "subc_trunk": 15.5,
            "subc_arms": 24.2,
            "subc_legs": 24.2,
            "skel_body": 32.1,
            "skel_trunk": 24.7,
            "skel_arms": 38,
            "skel_legs": 49.4
        }]
    },
    {
        "name": "Sudeep Bidwai",
        "gender": "M",
        "height": 164,
        "age": 27,
        "data": [{
            "weight": 73.8,
            "fat": 23.1,
            "vfat": 11.5,
            "rm": 1664,
            "bmi": 27.4,
            "bodyage": 41,
            "subc_body": 16.6,
            "subc_trunk": 15.2,
            "subc_arms": 22.7,
            "subc_legs": 22.5,
            "skel_body": 32,
            "skel_trunk": 25.2,
            "skel_arms": 37.5,
            "skel_legs": 49.3
        }]
    },
    {
        "name": "Shankar Lugde",
        "gender": "M",
        "height": 167,
        "age": 27,
        "data": [{
            "weight": 52.4,
            "fat": 20.4,
            "vfat": 3,
            "rm": 1331,
            "bmi": 18.8,
            "bodyage": 20,
            "subc_body": 13.5,
            "subc_trunk": 11.5,
            "subc_arms": 20.7,
            "subc_legs": 20.2,
            "skel_body": 34.1,
            "skel_trunk": 27.5,
            "skel_arms": 40.7,
            "skel_legs": 51.4
        }]
    },
    {
        "name": "Pravin Pawar",
        "gender": "M",
        "height": "",
        "age": "",
        "data": [{
            "weight": "",
            "fat": "",
            "vfat": "",
            "rm": "",
            "bmi": "",
            "bodyage": "",
            "subc_body": "",
            "subc_trunk": "",
            "subc_arms": "",
            "subc_legs": "",
            "skel_body": "",
            "skel_trunk": "",
            "skel_arms": "",
            "skel_legs": ""
        }]
    }
];


mongoose.connect('mongodb://user:user123@ds159737.mlab.com:59737/mongodeebee');

var PersonSchema = new Schema({
    name: 'String',
    gender: 'String',
    height: 'Number',
    age: 'Number',
    data: [{}]
});

var DataSchema = new Schema({
    weight: 'Number',
    fat: 'Number',
    vfat: 'Number',
    rm: 'Number',
    bmi: 'Number',
    bodyage: 'Number',
    'subc_body': 'Number',
    'subc_trunk': 'Number',
    'subc_arms': 'Number',
    'subc_legs': 'Number',
    'skel_body': 'Number',
    'skel_trunk': 'Number',
    'skel_arms': 'Number',
    'skel_legs': 'Number'
});

var Person = mongoose.model('Person', PersonSchema, 'person');

// for (var i = 0; i < initialData.length; i++) {
//     var person = new Person(initialData[i]);
//     person.save(function(err) {
//         if (err) throw err;
//         console.log('new data added');
//     });
// }

Array.prototype.contains = function(value) {
    if (value == null || value === undefined) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (value === this[i])
            return true;
    }
    return false;
}



var usernames = ['archana.chavan', 'bhavana.bangar', 'deepti.chandel', 'dhanashree.dhotrikar', 'jyoti.khedkar', 'kalyani.pawar', 'khusbhoo.singh', 'kirti.kumbhare', 'kshitija.tilekar', 'lakshmi.ranganathan', 'neelam.pawar', 'neelam.rajput', 'pallavi.mote', 'preeti.lamba', 'priya.kondekar', 'reshma.chavan', 'rupali.patil', 'sheetal.mhetre', 'shruti.ghanekar', 'shweta.majgaonkar', 'shweta.mate', 'sonali.khamkar', 'sunanda.behera', 'vaishali.lokhande', 'abhishek.patil', 'ajit.dhaigude', 'akshay.jadhav', 'amit.duseja', 'amit.jain', 'amol.kalbhor', 'aniket.godse', 'aniruddh.patil', 'ashish.wadekar', 'ashwin.chattar', 'atul.chaskar', 'atul.vernekar', 'avinas.labade', 'avinash.rangari', 'avnish.dubey', 'balvinder.singh', 'bharat.talreja', 'bhushan.rathod', 'devesh.sapkale', 'kalpesh.borse', 'keerthi.kandregula', 'keval.agrawal', 'kiran.bakwad', 'lokesh.salunkhe', 'manas.kulkarni', 'mangesh.gulabrao', 'mayur.kharat', 'nikhil.sihare', 'prabhata.raipurkar', 'prasann.choudhari', 'pratik.patade', 'pravin.pawar', 'rahul.salgar', 'ravi.ranjan', 'sachin.nagvekar', 'sachin.shevate', 'sandeep.shinde', 'sanket.khalekar', 'shantanu.dabhade', 'shashikant.chitalkar', 'shreyas.dube', 'swapnil.mande', 'swapnil.menkudale', 'tukaram.kalane', 'tushar.joshi', 'umesh.sutar', 'vijay.patil', 'vijay.udgiri', 'vikram.pawar', 'vinod.patil', 'vishal.gaikwad', 'william.fernandes', 'jnaneswar.baswani', 'mangesh.choudhari', 'joshi.apurva', 'vina.nalwawade', 'akshay.gadekar', 'saurabh.yashwante', 'govind.vhanshette', 'manogya.gadgil', 'sudeep.bidwai', 'shankar.lugde', 'pravin.pawar'];

var passwords = ['qYyEkF', 'd3YZRW', 'sPwXEc', '8bVFXP', 'QVkfKC', 'hcyyqU', 'gvCMnf', 'AwK2rD', 'jYQ4XE', 'PCPpaT', 'L4kCmR', 'huhBCq', 'CBfJNk', '9GjKru', 'xC5GQN', 'CDZrMy', '8L7bN4', 'Rky9dE', '3DagBD', 'd5jnLM', 'LGq3dh', 'aF2ycZ', 'XXfkLd', 'fxgLVY', 'zWdPbA', 'WFF8ss', 'dDPtqh', 'jpvRKY', '6f954P', 'ghwjC6', 'yakcAJ', 'RJjz54', 'dmkXdv', 'eSrVfw', 'qfv2ZL', 'nLvMZV', 'xYuqXP', 'Wj2vHW', 'UK6Bq5', 'WuXPJb', '7Jy6e6', 'H6DRkf', 'peGvGn', '9w39nv', 'tvedXf', 'G8PnPM', 'K2fhfx', 'w7XpQG', 'wakZMb', '7PZRSQ', 'Zss7Hr', 'wAJ78r', '5ShG2P', 'YMC5bE', '67KRx8', '55Mvfq', 'gyAmXX', '4Ksz3r', 'tDKxgB', 'M49K7d', 'UMVX6J', 'q78QY2', 'eX6DpF', 'MfDvqJ', 'bpZe9d', 'MN9bQ6', 'M5qqAy', 'Kj9NNm', 'bFaxu5', '8t8LJw', 'bS257r', 'AbwABf', '9fYuFm', 'aamZUZ', 'U859D9', 'h4N8Ka', 'ZaD5bg', 'EcPnTt', 'PtBRhS', 'GmyAe6', 'FRNu4X', 'duh3Ub', 'KzyZuW', 'Xz4yNm', 'ReC4pq', 'WvXEuD', 'WuQh63'];

var fullnames = ['Archana Chavan', 'Bhavana Bangar', 'Deepti Chandel', 'Dhanashree Dhotrikar', 'Jyoti Khedkar', 'Kalyani Pawar', 'Khusbhoo Singh', 'Kirti Kumbhare', 'Kshitija Tilekar', 'Lakshmi Ranganathan', 'Neelam Pawar', 'Neelam Rajput', 'Pallavi Mote', 'Preeti Lamba', 'Priya Kondekar', 'Reshma Chavan', 'Rupali Patil', 'Sheetal Mhetre', 'Shruti Ghanekar', 'Shweta Majgaonkar', 'Shweta Mate', 'Sonali Khamkar', 'Sunanda Behera', 'Vaishali Lokhande', 'Abhishek Patil', 'Ajit Dhaigude', 'Akshay Jadhav', 'Amit Duseja', 'Amit Jain', 'Amol Kalbhor', 'Aniket Godse', 'Aniruddh Patil', 'Ashish Wadekar', 'Ashwin Chattar', 'Atul Chaskar', 'Atul Vernekar', 'Avinas Labade', 'Avinash Rangari', 'Avnish Dubey', 'Balvinder Singh', 'Bharat Talreja', 'Bhushan Rathod', 'Devesh Sapkale', 'Kalpesh Borse', 'Keerthi Kandregula', 'Keval Agrawal', 'Kiran Bakwad', 'Lokesh Salunkhe', 'Manas Kulkarni', 'Mangesh Gulabrao', 'Mayur Kharat', 'Nikhil Sihare', 'Prabhata Raipurkar', 'Prasann Choudhari', 'Pratik Patade', 'Pravin Pawar', 'Rahul Salgar', 'Ravi Ranjan', 'Sachin Nagvekar', 'Sachin Shevate', 'Sandeep Shinde', 'Sanket Khalekar', 'Shantanu Dabhade', 'Shashikant Chitalkar', 'Shreyas Dube', 'Swapnil Mande', 'Swapnil Menkudale', 'Tukaram Kalane', 'Tushar Joshi', 'Umesh Sutar', 'Vijay Patil', 'Vijay Udgiri', 'Vikram Pawar', 'Vinod Patil', 'Vishal Gaikwad', 'William Fernandes', 'Jnaneswar Baswani', 'Mangesh Choudhari', 'Joshi Apurva', 'Vina Nalwawade', 'Akshay Gadekar', 'Saurabh Yashwante', 'Govind Vhanshette', 'Manogya Gadgil', 'Sudeep Bidwai', 'Shankar Lugde', 'Pravin Pawar'];


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(request, response) {
    response.redirect('/login');
});



app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/view/login.html');
})

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');
})

app.post('/auth', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (usernames.contains(username)) {
        if (usernames.indexOf(username) == passwords.indexOf(password))
            res.send({ 'auth': usernames.indexOf(username) });
        else
            res.send({ 'auth': 'INCORRECT' });
    } else
        res.send({ 'auth': false });
});

app.post('/GetData', function(req, res) {
    var key = req.body.key;
    if (key == null)
        res.send(null);
    else {
        if (typeof key === "string")
            key = Number(key);
        Person.find({
                name: fullnames[key]
            },
            function(err, user) {
                if (err) throw err
                console.log(JSON.stringify(user));
                res.send(user);
            });


    }
});

app.listen(process.env.PORT || 80, function() {


});