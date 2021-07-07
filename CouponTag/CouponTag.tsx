import { Text } from '@tarojs/components';
import React, { Component } from 'react';
import './CouponTag.scss';

export interface CouponTagProps {
  text: string;
}

export default class CouponTag extends Component<CouponTagProps> {
  render() {
    const { text } = this.props;
    return <Text className="coupon-tag">{text}</Text>;
  }
}
