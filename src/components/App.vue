<template>
  <Page class="page">
    <ActionBar title="Vegetable Market" class="text-dark" />

    <!-- //! -->
    <StackLayout backgroundColor="white">
      <!-- //todo: banner -->
      <StackLayout
        backgroundImage="~/assets/images/banner.jpg"
        width="100%"
        height="350px"
        stretch="aspectFit"
      >
        <Label
          text="Vegetables"
          color="green"
          class="h1 text-right"
          style="padding-top: 150px"
        />
      </StackLayout>
      <!-- //*: banner -->

      <!-- //todo :Cart Status -->
      <FlexboxLayout
        class="bg-light tvElevation"
        justifyContent="space-around"
        alignItems="center"
      >
        <Label class="fas text-info h1" @tap="showListCart"
          >{{ icons[2].icon | fonticon }}
        </Label>
        <Label color="red" class="text-right h6">
          Item Selected: {{ listCart.length }}</Label
        >
        <Label color="red" class="text-right h6">
          Total Score: {{ totalScore }}</Label
        >
        <Button @tap="resetAll()" class="h6 bg-warning text-white"
          >Reset</Button
        >
      </FlexboxLayout>
      <!-- //* :Cart Status -->

      <!-- //todo: list Vegetable-->
      <ListView for="item in vegetables">
        <v-template>
          <FlexboxLayout
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FlexboxLayout>
              <Image
                :src="item.imageSrc"
                class="thumb"
                width="25%"
                height="auto"
              />
              <StackLayout orientation="vertical">
                <Label
                  :text="item.name"
                  class="h3 text-success"
                  style="font-weight: bold"
                />
                <Label class="h6"> Score : {{ item.score }} $</Label>
                <AbsoluteLayout>
                  <Label class="fas h3">{{ icons[2].icon | fonticon }} </Label>
                  <Label
                    style="margin-left: 110px"
                    :text="item.soLuong"
                    color="red"
                  />
                </AbsoluteLayout>
              </StackLayout>
            </FlexboxLayout>
            <FlexboxLayout justifyContent="center" alignItems="center">
              <Label
                @tap="toggleCart(false, item)"
                class="fas"
                style="font-size: 24px"
                >{{ icons[1].icon | fonticon }}</Label
              >
              <Label :text="item.soLuong" color="red" />
              <Label
                @tap="toggleCart(true, item)"
                class="fas"
                style="font-size: 24px"
                >{{ icons[0].icon | fonticon }}</Label
              >
            </FlexboxLayout>
          </FlexboxLayout>
        </v-template>
      </ListView>
      <!-- //*: list Vegetable-->
    </StackLayout>
  </Page>
</template>

<script>
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import * as color from "tns-core-modules/color";

import "./../../src/assets/css/style.css";
// import "./../../node_modules/bootstrap/dist/css/bootstrap.css";

import ListCart from "./ListCart";
export default {
  data() {
    return {
      // showListCart: ListCart,
      listCart: [],
      movies: [
        {
          imgsrc: "https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png",
          title: "Requiem for a Dream",
          director: "Darren Aronofsky",
        },
        {
          imgsrc: "https://img.mobiscroll.com/demos/The_Dark_Knight.png",
          title: "The Dark Knight",
          director: "Christopher Nolan",
        },
        {
          imgsrc: "https://img.mobiscroll.com/demos/Despicable_Me.png",
          title: "Despicable Me",
          director: "Pierre Coffin and Chris Renaud",
        },
        {
          imgsrc: "https://img.mobiscroll.com/demos/Mr_Nobody.png",
          title: "Mr. Nobody",
          director: "Jaco Van Dormael",
        },
      ],
      icons: [
        {
          icon: "fa-plus-circle",
          name: "Edit profile",
        },
        {
          icon: "fa-minus-circle",
          name: "Settings",
        },
        {
          icon: "fa-shopping-cart",
          name: "Rate",
        },
        {
          icon: "fa-comments",
          name: "Tell a friend",
        },
      ],
      vegetables: [
        {
          id: "0",
          title: "chuoi",
          name: "Chuối",
          imageSrc: "~/assets/images/chuoi.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "1",
          title: "tao",
          name: "Táo",
          imageSrc: "~/assets/images/tao.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "2",
          title: "cam",
          name: "Cam",
          imageSrc: "~/assets/images/cam.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "3",
          title: "nho",
          name: "Nho",
          imageSrc: "~/assets/images/nho.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "4",
          title: "dautay",
          name: "Dâu Tây",
          imageSrc: "~/assets/images/dau.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "5",
          title: "suplo",
          name: "Súp Lơ",
          imageSrc: "~/assets/images/suplo.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "6",
          title: "cachua",
          name: "Cà Chua",
          imageSrc: "~/assets/images/cachua.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "7",
          title: "dauque",
          name: "Đậu Que",
          imageSrc: "~/assets/images/dauque.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "8",
          title: "otchuong",
          name: "Ớt Chuông",
          imageSrc: "~/assets/images/otchuong.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "9",
          title: "xalach",
          name: "Xà Lách",
          imageSrc: "~/assets/images/xalach.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
        {
          id: "10",
          titel: "catim",
          name: "Cà Tím",
          imageSrc: "~/assets/images/catim.jpg",
          score: 10000,
          director: "Vegetable",
          soLuong: 0,
        },
      ],
    };
  },
  methods: {
    pageLoaded() {
      if (app.android && platform.device.sdkVersion >= "21") {
        const window = app.android.foregroundActivity.getWindow();
        window.setStatusBarColor(new color.Color("#3498db").android);
      }
    },
    showListCart() {
      this.$showModal(ListCart, {
        fullscreen: true,
        props: { listCart: this.listCart },
      }).then((data) => {
        console.log(data);
        // let index = this.vegetables.findIndex((item) => item.id === data.id);
        // let indexCart = this.listCart.findIndex((item) => item.id === data.id);

        // let vegetables = [...this.vegetables, ...data];
        // vegetables[index] = data;
        // this.vegetables = vegetables;
        // console.log(this.vegetables);
      });
    },
    toggleCart(status, cart) {
      console.log(status);
      let index = this.vegetables.findIndex((item) => item.id === cart.id);
      let indexCart = this.listCart.findIndex((item) => item.id === cart.id);

      if (status) {
        this.vegetables[index].soLuong += 1;
        if (indexCart !== -1) {
          this.listCart[indexCart].soLuong = this.vegetables[index].soLuong;
        } else {
          this.listCart.push({ ...cart, soLuong: 1 });
        }
      } else {
        if (indexCart !== -1) {
          if (this.vegetables[index].soLuong > 0) {
            this.vegetables[index].soLuong -= 1;
            this.listCart[indexCart].soLuong = this.vegetables[index].soLuong;
          }
          if (this.vegetables[index].soLuong < 1) {
            this.listCart.splice(indexCart, 1);
          }
        }
      }
    },
    resetAll() {
      this.listCart = [];
      return this.vegetables.forEach((element, index) => {
        return (element.soLuong = 0);
      });
    },
  },
  computed: {
    totalScore() {
      return this.vegetables.reduce(
        (total, crrItem) =>
          (total += parseInt(crrItem.score) * parseInt(crrItem.soLuong)),
        0
      );
    },
  },
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}
.description-label {
  margin-bottom: 15;
}
.action-bar {
  background: #3498db;
  color: #ffffff;
}
.img-circle {
  width: 50px;
  height: 50px;
}

.shadow {
  box-shadow: 2 2 10 black;
}
</style>
