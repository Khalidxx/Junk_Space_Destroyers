import { observable, action, computed } from "mobx-angular";
import { Injectable } from "@angular/core";
import { Merchant, MerchantDetail, Category, ConsumerComment } from "../models";
import {
  MerchantListProvider,
  MerchantDetailProvider,
  CategoryListProvider,
  ConsumerCommentListProvider
} from "../providers";

@Injectable()
export class MerchantStore {
  key: number = null;
  @observable merchantList: Merchant[] = null;
  @observable merchantDetail: MerchantDetail = null;
  @observable categoryList: Category[] = null;
  @observable consumerCommentList: ConsumerComment[] = null;
  @observable merchant: Merchant = null;

  constructor(
    public merchantListProvider: MerchantListProvider,
    public merchantDetailProvider: MerchantDetailProvider,
    public categoryListProvider: CategoryListProvider,
    public consumerCommentListProvider: ConsumerCommentListProvider
  ) {}

  @action
  merchantInit(merchant: Merchant) {
    if (merchant.key != this.key) {
      this.key = merchant.key;
      this.merchant = merchant;
      this.queryMerchantDetail();
      this.queryCategoryList();
      this.consumerCommentList = null;
    }
  }

  @action
  queryMerchantDetail() {
    this.merchantDetail = this.merchantDetailProvider.query(this.key);
  }

  @action
  queryCategoryList() {
    this.categoryList = this.categoryListProvider.query(this.key);
  }

  @computed
  get MerchantList() {
    if (this.merchantList == null) {
      this.merchantList = this.merchantListProvider.query();
    }
    return this.merchantList;
  }

  @computed
  get MerchantDetail() {
    return this.merchantDetail;
  }

  @computed
  get CategoryList() {
    return this.categoryList;
  }

  @computed
  get ConsumerCommentList() {
    if (this.consumerCommentList == null) {
      this.consumerCommentList = this.consumerCommentListProvider.query();
    }
    return this.consumerCommentList;
  }
}
