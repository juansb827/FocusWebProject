import { Observable } from 'rxjs/Observable';
import { Form, DataSet, DataSetItem } from './form';
export function removeSpaces(value) {
    return value.trim().replace(/\s+/g, ' ');
}

export function removeSpacesFromItems(items: DataSetItem[]): DataSetItem[] {
    
        items.forEach(item => {
            item.value = item.value.trim().replace(/\s+/g, ' ');
            item.label = item.label.trim().replace(/\s+/g, ' ');
        });
        return items;
    
}

export function removeSpacesFromDataSet(dataset: DataSet): DataSet {
    dataset.items.forEach(item => {
        item.value = item.value.trim().replace(/\s+/g, ' ');
        item.label = item.label.trim().replace(/\s+/g, ' ');

    });
    return dataset;
}