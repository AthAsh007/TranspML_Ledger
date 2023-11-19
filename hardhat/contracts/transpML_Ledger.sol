// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract transpML_Ledger {
    struct DataModel {
        address owner;
        string modelName;
        string modelDetails;
        uint256 timestamp;
    }

    mapping(uint256 => DataModel) public dataModels;
    uint256 public dataModelCount;

    event DataModelUploaded(uint256 indexed id, address indexed owner, string modelName, uint256 timestamp);

    function uploadDataModel(string memory _modelName, string memory _modelDetails) public {
        uint256 currentId = dataModelCount++;
        DataModel storage newModel = dataModels[currentId];
        newModel.owner = msg.sender;
        newModel.modelName = _modelName;
        newModel.modelDetails = _modelDetails;
        newModel.timestamp = block.timestamp;

        emit DataModelUploaded(currentId, msg.sender, _modelName, block.timestamp);
    }

    function getDataModel(uint256 _id) public view returns (
        address owner,
        string memory modelName,
        string memory modelDetails,
        uint256 timestamp
    ) {
        require(_id < dataModelCount, "Invalid data model ID");
        DataModel storage model = dataModels[_id];
        return (
            model.owner,
            model.modelName,
            model.modelDetails,
            model.timestamp
        );
    }
}
