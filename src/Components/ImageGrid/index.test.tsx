import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { ImageGrid } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

const server = setupServer(
  rest.get(
    "https://api.unsplash.com/topics/blockchain/photos",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: "BJ-gRoTVR6Y",
            created_at: "2022-01-15T20:53:43-05:00",
            updated_at: "2022-01-21T00:26:10-05:00",
            promoted_at: "2022-01-16T07:48:01-05:00",
            width: 2250,
            height: 4000,
            color: "#0c2640",
            blur_hash: "Lk5i:EWAVqkDjbkBbFjbMaogkXae",
            description: null,
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1642298014452-b9a8c4bf2026?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1642298014452-b9a8c4bf2026?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1642298014452-b9a8c4bf2026?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1642298014452-b9a8c4bf2026?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1642298014452-b9a8c4bf2026?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/BJ-gRoTVR6Y",
              html: "https://unsplash.com/photos/BJ-gRoTVR6Y",
              download:
                "https://unsplash.com/photos/BJ-gRoTVR6Y/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/BJ-gRoTVR6Y/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 26,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blockchain: {
                status: "approved",
                approved_on: "2022-01-17T15:49:44-05:00",
              },
            },
            user: {
              id: "NmOv5VBKqwg",
              updated_at: "2022-01-21T06:05:11-05:00",
              username: "gundim",
              name: "Dim Gunger",
              first_name: "Dim",
              last_name: "Gunger",
              twitter_username: null,
              portfolio_url: null,
              bio: "For my support you can subscribe to my instagram and donations: www.paypal.me/diiim\r\nThank you!",
              location: "Saint Petersburg",
              links: {
                self: "https://api.unsplash.com/users/gundim",
                html: "https://unsplash.com/@gundim",
                photos: "https://api.unsplash.com/users/gundim/photos",
                likes: "https://api.unsplash.com/users/gundim/likes",
                portfolio: "https://api.unsplash.com/users/gundim/portfolio",
                following: "https://api.unsplash.com/users/gundim/following",
                followers: "https://api.unsplash.com/users/gundim/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1618746660981-d7efba560384image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1618746660981-d7efba560384image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1618746660981-d7efba560384image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "gun.di",
              total_collections: 0,
              total_likes: 27,
              total_photos: 72,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "gun.di",
                portfolio_url: null,
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          {
            id: "klZ-33scPBk",
            created_at: "2022-01-15T04:47:18-05:00",
            updated_at: "2022-01-20T15:25:14-05:00",
            promoted_at: null,
            width: 7680,
            height: 4320,
            color: "#262626",
            blur_hash: "LQ68^0bJVnocp3j?e*j]RLoHo$a~",
            description:
              "3D illustration of Tezos coin, bitcoin, Ehtereum, and dogecoin. Tezos is a blockchain designed to evolve.\nwork 👇: \n Email: shubhamdhage000@gmail.com",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1642239817310-e87f49fbb561?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1642239817310-e87f49fbb561?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1642239817310-e87f49fbb561?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1642239817310-e87f49fbb561?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1642239817310-e87f49fbb561?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/klZ-33scPBk",
              html: "https://unsplash.com/photos/klZ-33scPBk",
              download:
                "https://unsplash.com/photos/klZ-33scPBk/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/klZ-33scPBk/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 2,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "3d-renders": { status: "rejected" },
              blockchain: {
                status: "approved",
                approved_on: "2022-01-15T05:43:28-05:00",
              },
            },
            user: {
              id: "5TCQxdaW0wE",
              updated_at: "2022-01-21T06:35:21-05:00",
              username: "theshubhamdhage",
              name: "Shubham Dhage",
              first_name: "Shubham",
              last_name: "Dhage",
              twitter_username: "theshubhamdhage",
              portfolio_url: "https://theshubhamdhage.netlify.app/",
              bio: "Engineer by profession, photographer by passion.\r\n3D Abstract Design +917559305753 Whatsapp.",
              location: "Maharashtra,India",
              links: {
                self: "https://api.unsplash.com/users/theshubhamdhage",
                html: "https://unsplash.com/@theshubhamdhage",
                photos: "https://api.unsplash.com/users/theshubhamdhage/photos",
                likes: "https://api.unsplash.com/users/theshubhamdhage/likes",
                portfolio:
                  "https://api.unsplash.com/users/theshubhamdhage/portfolio",
                following:
                  "https://api.unsplash.com/users/theshubhamdhage/following",
                followers:
                  "https://api.unsplash.com/users/theshubhamdhage/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "cgshubz",
              total_collections: 2,
              total_likes: 8,
              total_photos: 390,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "cgshubz",
                portfolio_url: "https://theshubhamdhage.netlify.app/",
                twitter_username: "theshubhamdhage",
                paypal_email: null,
              },
            },
          },
          {
            id: "lAuVS68Z0HQ",
            created_at: "2022-01-15T04:47:18-05:00",
            updated_at: "2022-01-20T16:25:54-05:00",
            promoted_at: null,
            width: 7680,
            height: 4320,
            color: "#0c2626",
            blur_hash: "LC8#=^RjROx]8wofDOV@ovV@%#kC",
            description:
              "3D illustration of Tezos coin, bitcoin, Ehtereum, and dogecoin. Tezos is a blockchain designed to evolve.\nwork 👇: \n Email: shubhamdhage000@gmail.com",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1642239817395-6cfe3bada398?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1642239817395-6cfe3bada398?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1642239817395-6cfe3bada398?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1642239817395-6cfe3bada398?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1642239817395-6cfe3bada398?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/lAuVS68Z0HQ",
              html: "https://unsplash.com/photos/lAuVS68Z0HQ",
              download:
                "https://unsplash.com/photos/lAuVS68Z0HQ/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/lAuVS68Z0HQ/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 10,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "3d-renders": {
                status: "approved",
                approved_on: "2022-01-15T05:45:28-05:00",
              },
              blockchain: {
                status: "approved",
                approved_on: "2022-01-15T05:43:28-05:00",
              },
            },
            user: {
              id: "5TCQxdaW0wE",
              updated_at: "2022-01-21T06:35:21-05:00",
              username: "theshubhamdhage",
              name: "Shubham Dhage",
              first_name: "Shubham",
              last_name: "Dhage",
              twitter_username: "theshubhamdhage",
              portfolio_url: "https://theshubhamdhage.netlify.app/",
              bio: "Engineer by profession, photographer by passion.\r\n3D Abstract Design +917559305753 Whatsapp.",
              location: "Maharashtra,India",
              links: {
                self: "https://api.unsplash.com/users/theshubhamdhage",
                html: "https://unsplash.com/@theshubhamdhage",
                photos: "https://api.unsplash.com/users/theshubhamdhage/photos",
                likes: "https://api.unsplash.com/users/theshubhamdhage/likes",
                portfolio:
                  "https://api.unsplash.com/users/theshubhamdhage/portfolio",
                following:
                  "https://api.unsplash.com/users/theshubhamdhage/following",
                followers:
                  "https://api.unsplash.com/users/theshubhamdhage/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "cgshubz",
              total_collections: 2,
              total_likes: 8,
              total_photos: 390,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "cgshubz",
                portfolio_url: "https://theshubhamdhage.netlify.app/",
                twitter_username: "theshubhamdhage",
                paypal_email: null,
              },
            },
          },
          {
            id: "WjVHp7heLWw",
            created_at: "2022-01-15T04:47:18-05:00",
            updated_at: "2022-01-20T18:25:44-05:00",
            promoted_at: null,
            width: 7680,
            height: 4320,
            color: "#404059",
            blur_hash: "L98XhIoaV;o#xsj]kDW9MakEbIad",
            description:
              "3D illustration of Tezos coin, bitcoin, Ehtereum, and dogecoin. Tezos is a blockchain designed to evolve.\nwork 👇: \n Email: shubhamdhage000@gmail.com",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1642239817413-692565098d33?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1642239817413-692565098d33?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1642239817413-692565098d33?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1642239817413-692565098d33?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1642239817413-692565098d33?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/WjVHp7heLWw",
              html: "https://unsplash.com/photos/WjVHp7heLWw",
              download:
                "https://unsplash.com/photos/WjVHp7heLWw/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/WjVHp7heLWw/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 2,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "3d-renders": { status: "rejected" },
              blockchain: {
                status: "approved",
                approved_on: "2022-01-15T05:43:28-05:00",
              },
            },
            user: {
              id: "5TCQxdaW0wE",
              updated_at: "2022-01-21T06:35:21-05:00",
              username: "theshubhamdhage",
              name: "Shubham Dhage",
              first_name: "Shubham",
              last_name: "Dhage",
              twitter_username: "theshubhamdhage",
              portfolio_url: "https://theshubhamdhage.netlify.app/",
              bio: "Engineer by profession, photographer by passion.\r\n3D Abstract Design +917559305753 Whatsapp.",
              location: "Maharashtra,India",
              links: {
                self: "https://api.unsplash.com/users/theshubhamdhage",
                html: "https://unsplash.com/@theshubhamdhage",
                photos: "https://api.unsplash.com/users/theshubhamdhage/photos",
                likes: "https://api.unsplash.com/users/theshubhamdhage/likes",
                portfolio:
                  "https://api.unsplash.com/users/theshubhamdhage/portfolio",
                following:
                  "https://api.unsplash.com/users/theshubhamdhage/following",
                followers:
                  "https://api.unsplash.com/users/theshubhamdhage/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "cgshubz",
              total_collections: 2,
              total_likes: 8,
              total_photos: 390,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "cgshubz",
                portfolio_url: "https://theshubhamdhage.netlify.app/",
                twitter_username: "theshubhamdhage",
                paypal_email: null,
              },
            },
          },
          {
            id: "5bVl7-2mozU",
            created_at: "2022-01-12T00:29:55-05:00",
            updated_at: "2022-01-20T08:25:15-05:00",
            promoted_at: null,
            width: 6048,
            height: 4024,
            color: "#262626",
            blur_hash: "LZCsa2X99Hi]R*axoffk02e--:bw",
            description:
              "Bitcoin and Tezos coin are together on a marble background",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/5bVl7-2mozU",
              html: "https://unsplash.com/photos/5bVl7-2mozU",
              download:
                "https://unsplash.com/photos/5bVl7-2mozU/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/5bVl7-2mozU/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 3,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blockchain: {
                status: "approved",
                approved_on: "2022-01-15T05:43:28-05:00",
              },
            },
            user: {
              id: "E806JR9xt1I",
              updated_at: "2022-01-21T06:10:19-05:00",
              username: "quantitatives",
              name: "Quantitatives.io",
              first_name: "Quantitatives.io",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://quantitatives.io",
              bio: "Providing beautiful free images for the cryptocurrency community.",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/quantitatives",
                html: "https://unsplash.com/@quantitatives",
                photos: "https://api.unsplash.com/users/quantitatives/photos",
                likes: "https://api.unsplash.com/users/quantitatives/likes",
                portfolio:
                  "https://api.unsplash.com/users/quantitatives/portfolio",
                following:
                  "https://api.unsplash.com/users/quantitatives/following",
                followers:
                  "https://api.unsplash.com/users/quantitatives/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: null,
              total_collections: 13,
              total_likes: 311,
              total_photos: 311,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://quantitatives.io",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          {
            id: "x_Jo7MiOhPA",
            created_at: "2022-01-11T03:16:55-05:00",
            updated_at: "2022-01-21T02:26:11-05:00",
            promoted_at: null,
            width: 5540,
            height: 3686,
            color: "#0c5959",
            blur_hash: "LcEMaRbI0jj[W=ayoejs9#j[-Qay",
            description: "A Tezos coin on a blue-tiled surface",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1641888994649-ed29b56e4957?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1641888994649-ed29b56e4957?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1641888994649-ed29b56e4957?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1641888994649-ed29b56e4957?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1641888994649-ed29b56e4957?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/x_Jo7MiOhPA",
              html: "https://unsplash.com/photos/x_Jo7MiOhPA",
              download:
                "https://unsplash.com/photos/x_Jo7MiOhPA/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/x_Jo7MiOhPA/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 5,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blockchain: {
                status: "approved",
                approved_on: "2022-01-15T05:43:28-05:00",
              },
            },
            user: {
              id: "E806JR9xt1I",
              updated_at: "2022-01-21T06:10:19-05:00",
              username: "quantitatives",
              name: "Quantitatives.io",
              first_name: "Quantitatives.io",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://quantitatives.io",
              bio: "Providing beautiful free images for the cryptocurrency community.",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/quantitatives",
                html: "https://unsplash.com/@quantitatives",
                photos: "https://api.unsplash.com/users/quantitatives/photos",
                likes: "https://api.unsplash.com/users/quantitatives/likes",
                portfolio:
                  "https://api.unsplash.com/users/quantitatives/portfolio",
                following:
                  "https://api.unsplash.com/users/quantitatives/following",
                followers:
                  "https://api.unsplash.com/users/quantitatives/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: null,
              total_collections: 13,
              total_likes: 311,
              total_photos: 311,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://quantitatives.io",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          {
            id: "VkFLGd6JxOQ",
            created_at: "2022-01-10T03:22:52-05:00",
            updated_at: "2022-01-20T23:25:47-05:00",
            promoted_at: null,
            width: 4024,
            height: 6048,
            color: "#a67326",
            blur_hash: "LFK0WK9H%LM{TdE3~ANH=txF9wf5",
            description: "A Bitcoin leaning on a gold pine tree",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/VkFLGd6JxOQ",
              html: "https://unsplash.com/photos/VkFLGd6JxOQ",
              download:
                "https://unsplash.com/photos/VkFLGd6JxOQ/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/VkFLGd6JxOQ/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 7,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blockchain: {
                status: "approved",
                approved_on: "2022-01-15T05:43:28-05:00",
              },
            },
            user: {
              id: "E806JR9xt1I",
              updated_at: "2022-01-21T06:10:19-05:00",
              username: "quantitatives",
              name: "Quantitatives.io",
              first_name: "Quantitatives.io",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://quantitatives.io",
              bio: "Providing beautiful free images for the cryptocurrency community.",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/quantitatives",
                html: "https://unsplash.com/@quantitatives",
                photos: "https://api.unsplash.com/users/quantitatives/photos",
                likes: "https://api.unsplash.com/users/quantitatives/likes",
                portfolio:
                  "https://api.unsplash.com/users/quantitatives/portfolio",
                following:
                  "https://api.unsplash.com/users/quantitatives/following",
                followers:
                  "https://api.unsplash.com/users/quantitatives/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: null,
              total_collections: 13,
              total_likes: 311,
              total_photos: 311,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://quantitatives.io",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          {
            id: "kuDDku4EzC4",
            created_at: "2022-01-09T22:10:45-05:00",
            updated_at: "2022-01-21T02:26:09-05:00",
            promoted_at: null,
            width: 6048,
            height: 4024,
            color: "#404026",
            blur_hash: "LMGks;oL0:IW%Kj?R-WB9~NG?DM|",
            description: "A gold Bitcoin in the middle of ceramic pine trees",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1641784219669-88a6401031dd?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1641784219669-88a6401031dd?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1641784219669-88a6401031dd?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1641784219669-88a6401031dd?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/kuDDku4EzC4",
              html: "https://unsplash.com/photos/kuDDku4EzC4",
              download:
                "https://unsplash.com/photos/kuDDku4EzC4/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/kuDDku4EzC4/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 3,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blockchain: {
                status: "approved",
                approved_on: "2022-01-12T05:54:29-05:00",
              },
            },
            user: {
              id: "E806JR9xt1I",
              updated_at: "2022-01-21T06:10:19-05:00",
              username: "quantitatives",
              name: "Quantitatives.io",
              first_name: "Quantitatives.io",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://quantitatives.io",
              bio: "Providing beautiful free images for the cryptocurrency community.",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/quantitatives",
                html: "https://unsplash.com/@quantitatives",
                photos: "https://api.unsplash.com/users/quantitatives/photos",
                likes: "https://api.unsplash.com/users/quantitatives/likes",
                portfolio:
                  "https://api.unsplash.com/users/quantitatives/portfolio",
                following:
                  "https://api.unsplash.com/users/quantitatives/following",
                followers:
                  "https://api.unsplash.com/users/quantitatives/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: null,
              total_collections: 13,
              total_likes: 311,
              total_photos: 311,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://quantitatives.io",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          {
            id: "9HYlaGSB0Ko",
            created_at: "2022-01-10T22:17:24-05:00",
            updated_at: "2022-01-20T15:25:09-05:00",
            promoted_at: null,
            width: 6048,
            height: 4024,
            color: "#26260c",
            blur_hash: "LNC~%{t50TNI%Ka#R.oe4?R+-,s,",
            description:
              "A group of gold cryptocurrencies inside a golden cage\n",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1641871010295-4d2fee6fb9b0?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1641871010295-4d2fee6fb9b0?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1641871010295-4d2fee6fb9b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1641871010295-4d2fee6fb9b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1641871010295-4d2fee6fb9b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/9HYlaGSB0Ko",
              html: "https://unsplash.com/photos/9HYlaGSB0Ko",
              download:
                "https://unsplash.com/photos/9HYlaGSB0Ko/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/9HYlaGSB0Ko/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 3,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              blockchain: {
                status: "approved",
                approved_on: "2022-01-12T05:54:29-05:00",
              },
            },
            user: {
              id: "E806JR9xt1I",
              updated_at: "2022-01-21T06:10:19-05:00",
              username: "quantitatives",
              name: "Quantitatives.io",
              first_name: "Quantitatives.io",
              last_name: null,
              twitter_username: null,
              portfolio_url: "https://quantitatives.io",
              bio: "Providing beautiful free images for the cryptocurrency community.",
              location: null,
              links: {
                self: "https://api.unsplash.com/users/quantitatives",
                html: "https://unsplash.com/@quantitatives",
                photos: "https://api.unsplash.com/users/quantitatives/photos",
                likes: "https://api.unsplash.com/users/quantitatives/likes",
                portfolio:
                  "https://api.unsplash.com/users/quantitatives/portfolio",
                following:
                  "https://api.unsplash.com/users/quantitatives/following",
                followers:
                  "https://api.unsplash.com/users/quantitatives/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1641528197573-56568de354c7image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: null,
              total_collections: 13,
              total_likes: 311,
              total_photos: 311,
              accepted_tos: true,
              for_hire: false,
              social: {
                instagram_username: null,
                portfolio_url: "https://quantitatives.io",
                twitter_username: null,
                paypal_email: null,
              },
            },
          },
          {
            id: "aD77eIRI320",
            created_at: "2022-01-11T15:18:23-05:00",
            updated_at: "2022-01-20T08:25:15-05:00",
            promoted_at: null,
            width: 7680,
            height: 4320,
            color: "#d9d9d9",
            blur_hash: "LRAm-_WBI9ayI7j[t9j[4oj[xufk",
            description:
              "3D illustration of Tezos coin, bitcoin, and Ehtereum. blockchains designed to evolve.\nwork 👇: \n Email: shubhamdhage000@gmail.com",
            alt_description: null,
            urls: {
              raw: "https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1",
              full: "https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=85",
              regular:
                "https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
              small:
                "https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
              thumb:
                "https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
            },
            links: {
              self: "https://api.unsplash.com/photos/aD77eIRI320",
              html: "https://unsplash.com/photos/aD77eIRI320",
              download:
                "https://unsplash.com/photos/aD77eIRI320/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
              download_location:
                "https://api.unsplash.com/photos/aD77eIRI320/download?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxPeHludEpvQkRGWXx8fHx8Mnx8MTY0Mjc2NTM5NQ",
            },
            categories: [],
            likes: 8,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
              "3d-renders": {
                status: "approved",
                approved_on: "2022-01-12T05:46:01-05:00",
              },
              blockchain: {
                status: "approved",
                approved_on: "2022-01-12T05:54:29-05:00",
              },
            },
            user: {
              id: "5TCQxdaW0wE",
              updated_at: "2022-01-21T06:35:21-05:00",
              username: "theshubhamdhage",
              name: "Shubham Dhage",
              first_name: "Shubham",
              last_name: "Dhage",
              twitter_username: "theshubhamdhage",
              portfolio_url: "https://theshubhamdhage.netlify.app/",
              bio: "Engineer by profession, photographer by passion.\r\n3D Abstract Design +917559305753 Whatsapp.",
              location: "Maharashtra,India",
              links: {
                self: "https://api.unsplash.com/users/theshubhamdhage",
                html: "https://unsplash.com/@theshubhamdhage",
                photos: "https://api.unsplash.com/users/theshubhamdhage/photos",
                likes: "https://api.unsplash.com/users/theshubhamdhage/likes",
                portfolio:
                  "https://api.unsplash.com/users/theshubhamdhage/portfolio",
                following:
                  "https://api.unsplash.com/users/theshubhamdhage/following",
                followers:
                  "https://api.unsplash.com/users/theshubhamdhage/followers",
              },
              profile_image: {
                small:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
                medium:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
                large:
                  "https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
              },
              instagram_username: "cgshubz",
              total_collections: 2,
              total_likes: 8,
              total_photos: 390,
              accepted_tos: true,
              for_hire: true,
              social: {
                instagram_username: "cgshubz",
                portfolio_url: "https://theshubhamdhage.netlify.app/",
                twitter_username: "theshubhamdhage",
                paypal_email: null,
              },
            },
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Image Grid Tests", () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  test("Shows loading pictures", () => {
    render(
      <QueryClientProvider client={client}>
        <ImageGrid topic="blockchain" />
      </QueryClientProvider>
    );
    const linkElement = screen.getByText(/Loading Pictures/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Image Grid Loads Properly ( odd and even )", async () => {
    render(
      <QueryClientProvider client={client}>
        <ImageGrid topic="blockchain" />
      </QueryClientProvider>
    );
    const image = await screen.findByTestId("grid_image_1");
    const image2 = await screen.findByTestId("grid_image_2");
    expect(image).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
