import React, { Component } from 'react';
import './UI.css';

class UI extends Component {
    constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
    };
  }

  render() {
      return (
        <div className="container-fluid flyer-builder">
            <h1>Flyer Builder</h1>
            <p><em>Forked from <a target="_blank" href="http://codepen.io/massimo-cassandro/pen/qOrJNx">this original Pen by Massimo Cassandro</a>, for his SitePoint article on <a target="_blank"  href="http://sitepoint.com/generating-pdfs-from-web-pages-on-the-fly-with-jspdf">Generating PDFs from Web Pages on the Fly with jsPDF</a>. The preview doesn't work  with Chrome or Safari in this demo since it has been loaded in a iframe. Use Firefox or try at <a href="http://www.primominuto.net/articoli/pdf_flyer/flyer.html">www.primominuto.net/articoli/pdf_flyer/flyer.html</a></em></p>
            <div className="row">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="form-group">
                            <label htmlFor="flyer-title" className="control-label">Title</label>
                            <input required className="form-control" id="flyer-title" placeholder="Main title" value="Really incredible!!" maxLength="255" type="text" tabIndex="2"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="flyer-title-size" className="control-label">Size (pt)</label>
                            <input required className="form-control" id="flyer-title-size" value="60" min="1" step="1" type="number" tabIndex="3" title="Title size: tune it to fit the available space"/>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            <label htmlFor="flyer-title-color" className="control-label">Color</label>
                            <input required className="form-control" id="flyer-title-color" value="#0080FF" type="color" tabIndex="4" title="Title color"/>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="flyer-description">Description</label>
                    <textarea className="form-control" id="flyer-description" placeholder="Insert a short description taking care of the available space">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, nihil officia neque ad expedita consequatur quae! Voluptate, incidunt, earum, sit, eveniet harum ratione expedita quibusdam possimus sed laboriosam dolore ut recusandae eos. Ipsa,natus pariatur iste dolorum optio nostrum consectetur!</textarea>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="flyer-price" className="control-label">Price</label>
                            <input required className="form-control" id="flyer-price" placeholder="Enter price (w/o decimals)" value="100" type="number" tabIndex="5" step="any" min="0"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="flyer-price-currency" className="control-label">Currency</label>
                            <select required className="form-control" id="flyer-price-currency" tabIndex="6">
                                <option value="&euro;">&euro;</option>
                                <option value="$">$</option>
                                <option value="&pound;">&pound;</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            <label htmlFor="flyer-price-color" className="control-label">Color</label>
                            <input required className="form-control" id="flyer-price-color" value="#cc0000" type="color" tabIndex="8" title="Price color"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <button id="flyer_preview_btn" type="button" className="btn btn-primary btn-block" tabIndex="9">Update preview</button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group text-right">
                            <button id="flyer_download_btn" type="button" className="btn btn-default btn-xs btn-block" tabIndex="10">Download</button>
                        </div>
                    </div>
                </div>


                
                <div className="col-sm-6">
                    <iframe id="pdf_preview" type="application/pdf" src=""></iframe>
                </div>
            </div>
        </div>

      );
  }
}

export default UI;
