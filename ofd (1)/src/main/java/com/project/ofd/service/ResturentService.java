package com.project.ofd.service;

import com.project.ofd.Requests.createResturentRequest;
import com.project.ofd.model.Resturents;
import com.project.ofd.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ResturentService {
    public Resturents creteRestuents(createResturentRequest req, User user);
    public Resturents updateResturent(Long ResturentId, createResturentRequest updateReq);
    public Resturents deleteResturent(Long ResturentId);
    public List<Resturents> getAllResturents();
    public Resturents findResturentById(Long id);
    public List<Resturents> searchResturents();
    public boolean updateStatus(Long resturentId);


}
