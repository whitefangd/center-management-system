import { Component, Input } from '@angular/core';

import { Global } from '@boluclac/common';
import { ContentComponent } from '@boluclac/components-layout/content/content.component';

@Component({
	selector: 'layout',
	templateUrl: './layout.component.html'
})
export class LayoutComponent {

	private _PartitionTop = null;
	private _PartitionLeft = null;
	private _PartitionBottom = null;
	private _PartitionRight = null;
	private _PartitionContent = null;

	private _InputPartitionTop: any = {};
	private _InputPartitionLeft: any = {};
	private _InputPartitionBottom: any = {};
	private _InputPartitionRight: any = {};
	private _InputPartitionContent: any = {};

	private _ComponentContent: ContentComponent = null;

	private _InputComponentContent: ContentComponent = {};

	private _Type: Number;

	constructor() {
	}

	public get PartitionType() {
		return Global.PartitionType;
	}

	public get Type() {
		return this._Type;
	}

	public get PartitionTop() {
		return this._PartitionTop;
	}

	public get PartitionLeft() {
		return this._PartitionLeft;
	}

	public get PartitionBottom() {
		return this._PartitionBottom;
	}

	public get PartitionRight() {
		return this._PartitionRight;
	}

	public get PartitionContent() {
		return this._PartitionContent;
	}

	public get InputPartitionTop() {
		return this._InputPartitionTop;
	}

	public get InputPartitionLeft() {
		return this._InputPartitionLeft;
	}

	public get InputPartitionBottom() {
		return this._InputPartitionBottom;
	}

	public get InputPartitionRight() {
		return this._InputPartitionRight;
	}

	public get InputPartitionContent() {
		return this._InputPartitionContent;
	}

	public get ComponentContent() {
		return this._ComponentContent;
	}

	@Input() set Partitions(partitions) {
		console.log(partitions);
		this._Type = partitions.Type;
		if (partitions.PartitionContent != undefined && partitions.PartitionContent != null) {
			this._PartitionContent = LayoutComponent;
			this._InputPartitionContent = { Partitions: partitions.PartitionContent };
		}
		if (partitions.PartitionLeft != undefined && partitions.PartitionLeft != null) {
			this._PartitionLeft = LayoutComponent;
			this._InputPartitionLeft = { Partitions: partitions.PartitionLeft };
		}
		if (partitions.PartitionRight != undefined && partitions.PartitionRight != null) {
			this._PartitionRight = LayoutComponent;
			this._InputPartitionRight = { Partitions: partitions.PartitionRight };
		}
		if (partitions.PartitionTop != undefined && partitions.PartitionTop != null) {
			this._PartitionTop = LayoutComponent;
			this._InputPartitionTop = { Partitions: partitions.PartitionTop };
		}
		if (partitions.PartitionBottom != undefined && partitions.PartitionBottom != null) {
			this._PartitionBottom = LayoutComponent;
			this._InputPartitionBottom = { Partitions: partitions.PartitionBottom };
		}
		if (partitions.ComponentContent != undefined && partitions.ComponentContent != null) {
			this._ComponentContent = partitions.ComponentContent;
			// this._ComponentContent = partitions.ComponentContent;
		}
	}
}