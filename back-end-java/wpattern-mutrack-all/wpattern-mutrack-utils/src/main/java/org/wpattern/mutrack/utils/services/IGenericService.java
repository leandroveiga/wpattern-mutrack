package org.wpattern.mutrack.utils.services;

import java.io.Serializable;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

import org.wpattern.mutrack.utils.BaseEntity;

public interface IGenericService<T extends BaseEntity<ID>, ID extends Serializable> {

	@GET
	public List<T> findAll(@QueryParam("page") Integer page, @QueryParam("size") Integer size,
			@QueryParam("sort") String fields, @QueryParam("sortDesc") String fieldsDesc);

	@POST
	public T insert(T entityObject);

	@PUT
	public void update(T entityObject);

	@DELETE
	public void delete(T entityObject);

	@GET
	@Path("/{id:[0-9.,]*$}")
	public T findById(@PathParam("id") ID id);

}
