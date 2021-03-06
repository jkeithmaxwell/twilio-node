/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MediaList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created this resource
 * @param messageSid - A string that uniquely identifies this message
 */
declare function MediaList(version: V2010, accountSid: string, messageSid: string): MediaListInstance;

interface MediaListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MediaContext;
  /**
   * Streams MediaInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: MediaListInstanceEachOptions, callback?: (item: MediaInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a media
   *
   * @param sid - The unique string that identifies this resource
   */
  get(sid: string): MediaContext;
  /**
   * Retrieve a single target page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MediaPage) => any): Promise<MediaPage>;
  /**
   * Lists MediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MediaListInstanceOptions, callback?: (error: Error | null, items: MediaInstance[]) => any): Promise<MediaInstance[]>;
  /**
   * Retrieve a single page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MediaListInstancePageOptions, callback?: (error: Error | null, items: MediaPage) => any): Promise<MediaPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreated - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedAfter - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedBefore - The `YYYY-MM-DD` value of the resources to read
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface MediaListInstanceEachOptions {
  callback?: (item: MediaInstance, done: (err?: Error) => void) => void;
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property dateCreated - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedAfter - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedBefore - The `YYYY-MM-DD` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface MediaListInstanceOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property dateCreated - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedAfter - The `YYYY-MM-DD` value of the resources to read
 * @property dateCreatedBefore - The `YYYY-MM-DD` value of the resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface MediaListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface MediaPayload extends MediaResource, Page.TwilioResponsePayload {
}

interface MediaResource {
  account_sid: string;
  content_type: string;
  date_created: Date;
  date_updated: Date;
  parent_sid: string;
  sid: string;
  uri: string;
}

interface MediaSolution {
  accountSid?: string;
  messageSid?: string;
}


declare class MediaContext {
  /**
   * Initialize the MediaContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource(s) to fetch
   * @param messageSid - The SID of the Message resource that this Media resource belongs to
   * @param sid - The unique string that identifies this resource
   */
  constructor(version: V2010, accountSid: string, messageSid: string, sid: string);

  /**
   * fetch a MediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MediaInstance) => any): Promise<MediaInstance>;
  /**
   * remove a MediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MediaInstance) => any): void;
}


declare class MediaInstance extends SerializableClass {
  /**
   * Initialize the MediaContext
   *
   * @property accountSid - The SID of the Account that created this resource
   * @property contentType - The default mime-type of the media
   * @property dateCreated - The RFC 2822 date and time in GMT that this resource was created
   * @property dateUpdated - The RFC 2822 date and time in GMT that this resource was last updated
   * @property parentSid - The SID of the resource that created the media
   * @property sid - The unique string that identifies this resource
   * @property uri - The URI of this resource, relative to `https://api.twilio.com`
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created this resource
   * @param messageSid - A string that uniquely identifies this message
   * @param sid - The unique string that identifies this resource
   */
  constructor(version: V2010, payload: MediaPayload, accountSid: string, messageSid: string, sid: string);

  private _proxy: MediaContext;
  accountSid: string;
  contentType: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a MediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MediaInstance) => any): void;
  parentSid: string;
  /**
   * remove a MediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MediaInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the MediaInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uri: string;
}


declare class MediaPage extends Page<V2010, MediaPayload, MediaResource, MediaInstance> {
  /**
   * Initialize the MediaPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MediaSolution);

  /**
   * Build an instance of MediaInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaPayload): MediaInstance;
}

export { MediaContext, MediaInstance, MediaList, MediaListInstance, MediaListInstanceEachOptions, MediaListInstanceOptions, MediaListInstancePageOptions, MediaPage, MediaPayload, MediaResource, MediaSolution }
