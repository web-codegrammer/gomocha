import React from 'react'
import SelectMethodOfTrans from '../SelectMethodOfTrans/SelectMethodOfTrans'
import SelectPickUpTime from '../SelectPickUpTime/SelectPickUpTime'
import SelectIfFavorite from '../SelectIfFavorite/SelectIfFavorite'
import EnterPaymentInfo from '../EnterPaymentInfo/EnterPaymentInfo'
import AdditionalInfoNotification from '../AdditionalInfoNotification/AdditionalInfoNotification'
import Footer from '../../DashboardView/Footer/Footer'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './additional-info-view.scss'

var AdditionalInfoView = React.createClass({

    propTypes: {
        handleMethodOfTrans: React.PropTypes.func,
        handlePickupTime: React.PropTypes.func,
        pickupTime: React.PropTypes.string,
        handleFavorite: React.PropTypes.func,
        favorite: React.PropTypes.bool,
        handleCCName: React.PropTypes.func,
        handleCCNumber: React.PropTypes.func,
        handleCCExpMonth: React.PropTypes.func,
        expMonth: React.PropTypes.string,
        handleCCExpYear: React.PropTypes.func,
        expYear: React.PropTypes.string,
        handleCCCVV: React.PropTypes.func,
        toggleAdditionalInfoNotification: React.PropTypes.func,
        methodOfTrans: React.PropTypes.string
    },

    render: function() {

        var nextButton;
        if (this.props.methodOfTrans) {
            nextButton = <Link to="/order-summary">
                            <button className="next-button">
                                Next
                                <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                            </button>
                        </Link>
        } else {
            nextButton = <button
                            onClick={this.props.toggleAdditionalInfoNotification}
                            className="next-button">
                            Next
                            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                        </button>
        }

        return (
            <div className="additional-info-container">
                <div className="title-cover">
                    <h1>Tell us a little more!</h1>
                    <div className="userProgress">
                        <div id="threeOfFive">
                        </div>
                    </div>
                </div>
                <AdditionalInfoNotification
                    notification={this.props.notification} />
                <div>
                    <form>
                        <SelectMethodOfTrans
                            handleMethodOfTrans={this.props.handleMethodOfTrans} />
                        <SelectPickUpTime
                            handlePickupTime={this.props.handlePickupTime}
                            value={this.props.pickupTime || 'true'} />
                        <SelectIfFavorite
                            handleFavorite={this.props.handleFavorite}
                            value={this.props.favorite || false} />
                        <EnterPaymentInfo
                            handleCCName={this.props.handleCCName}
                            handleCCNumber={this.props.handleCCNumber}
                            handleCCExpMonth={this.props.handleCCExpMonth}
                            expMonthValue={this.props.expMonth || 'default'}
                            handleCCExpYear={this.props.handleCCExpYear}
                            expYearValue={this.props.expYear || 'default'}
                            handleCCCVV={this.props.handleCCCVV} />
                    </form>
                    <div className="next-button-container">
                        {nextButton}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
});

module.exports = AdditionalInfoView;
