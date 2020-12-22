<template>
  <Frame>
    <Page>
      <ActionBar title="List Cart" class="bg-warning" />
      <StackLayout>
        <ScrollView height="75%" orientation="vertical">
          <StackLayout height="100%">
            <!-- //todo: list listCart-->
            <ListView for="item in listCart">
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
                      <Label textWrap="true"> id: {{ item.id }} </Label>
                      <Label :text="item.director" textWrap="true" />

                      <Label> price : {{ item.score * item.soLuong }} $</Label>
                      <AbsoluteLayout>
                        <Label class="fas h3"
                          >{{ icons[2].icon | fonticon }}
                        </Label>
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
                      style="font-size: 16px"
                      >{{ icons[1].icon | fonticon }}</Label
                    >
                    <Label :text="item.soLuong" color="red" />
                    <Label
                      @tap="toggleCart(true, item)"
                      class="fas"
                      style="font-size: 16px"
                      >{{ icons[0].icon | fonticon }}</Label
                    >
                  </FlexboxLayout>
                </FlexboxLayout>
              </v-template>
            </ListView>
            <!-- //*: list listCart-->
          </StackLayout>
        </ScrollView>
        <!--  -->
        <template>
          <StackLayout>
            <Button @tap="$modal.close(listCart)" text="Close" />
            <Button @tap="test" text="Close" />
          </StackLayout>
        </template>
      </StackLayout>
    </Page>
  </Frame>
</template>

<script>
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import * as color from "tns-core-modules/color";

import "./../../src/assets/css/style.css";
export default {
  props: ["listCart"],
  data() {
    return {
      cartUpdated: null,
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
    };
  },
  methods: {
    test() {
      console.log(this.listCart);
    },
    toggleCart(status, cart) {
      console.log(status);
      let indexCart = this.listCart.findIndex((item) => item.id === cart.id);
      if (status) {
        let soLuong = (this.listCart[indexCart].soLuong += 1);
        let cartUpdated = { ...cart, soLuong };
        let listCart = [...this.listCart];
        this.cartUpdated = cartUpdated;
        listCart[indexCart] = this.cartUpdated;
        this.listCart = listCart;
      }
      if (!status) {
        this.listCart[indexCart].soLuong -= 1;
      }
    },
  },
  computed: {
    totalScore() {
      return this.listCart.reduce(
        (total, crrItem) =>
          (total += parseInt(crrItem.score) * parseInt(crrItem.soLuong)),
        0
      );
    },
  },
};
</script>

<style scoped>
</style>
