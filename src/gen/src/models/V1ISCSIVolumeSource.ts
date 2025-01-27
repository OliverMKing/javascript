/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1LocalObjectReference,
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
} from './V1LocalObjectReference';

/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1ISCSIVolumeSource
 */
export interface V1ISCSIVolumeSource {
    /**
     * whether support iSCSI Discovery CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthDiscovery?: boolean;
    /**
     * whether support iSCSI Session CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    chapAuthSession?: boolean;
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    fsType?: string;
    /**
     * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    initiatorName?: string;
    /**
     * Target iSCSI Qualified Name.
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iqn: string;
    /**
     * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    iscsiInterface?: string;
    /**
     * iSCSI Target Lun number.
     * @type {number}
     * @memberof V1ISCSIVolumeSource
     */
    lun: number;
    /**
     * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {Array<string>}
     * @memberof V1ISCSIVolumeSource
     */
    portals?: Array<string>;
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     * @type {boolean}
     * @memberof V1ISCSIVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1LocalObjectReference}
     * @memberof V1ISCSIVolumeSource
     */
    secretRef?: V1LocalObjectReference;
    /**
     * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {string}
     * @memberof V1ISCSIVolumeSource
     */
    targetPortal: string;
}

export function V1ISCSIVolumeSourceFromJSON(json: any): V1ISCSIVolumeSource {
    return V1ISCSIVolumeSourceFromJSONTyped(json, false);
}

export function V1ISCSIVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ISCSIVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chapAuthDiscovery': !exists(json, 'chapAuthDiscovery') ? undefined : json['chapAuthDiscovery'],
        'chapAuthSession': !exists(json, 'chapAuthSession') ? undefined : json['chapAuthSession'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'initiatorName': !exists(json, 'initiatorName') ? undefined : json['initiatorName'],
        'iqn': json['iqn'],
        'iscsiInterface': !exists(json, 'iscsiInterface') ? undefined : json['iscsiInterface'],
        'lun': json['lun'],
        'portals': !exists(json, 'portals') ? undefined : json['portals'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : V1LocalObjectReferenceFromJSON(json['secretRef']),
        'targetPortal': json['targetPortal'],
    };
}

export function V1ISCSIVolumeSourceToJSON(value?: V1ISCSIVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chapAuthDiscovery': value.chapAuthDiscovery,
        'chapAuthSession': value.chapAuthSession,
        'fsType': value.fsType,
        'initiatorName': value.initiatorName,
        'iqn': value.iqn,
        'iscsiInterface': value.iscsiInterface,
        'lun': value.lun,
        'portals': value.portals,
        'readOnly': value.readOnly,
        'secretRef': V1LocalObjectReferenceToJSON(value.secretRef),
        'targetPortal': value.targetPortal,
    };
}

