export class SnapshotFFI @ "Snapshot_prototype_destructor" {
    constructor() @ "Snapshot_prototype_constructor";

    dumpHeap(worker, exits) @ "Snapshot_prototype_dumpHeap";
    encodeSlot(root, exits) @ "Snapshot_prototype_encodeSlot";

    dump(root, exits) @ "Snapshot_prototype_dump";

    restoreFunction(code) @ "Snapshot_prototype_restoreFunction";
}
