
export class Partition {

    private _PartitionTop: Partition;
    private _PartitionLeft: Partition;
    private _PartitionBottom: Partition;
    private _PartitionRight: Partition;
    private _PartitionContent: Partition;

    private _PartitionType: Number;

    private _Component: Object;

    constructor() {

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
}