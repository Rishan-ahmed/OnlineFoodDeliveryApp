package com.project.ofd.serviceimp;

import com.project.ofd.Requests.createResturentRequest;
import com.project.ofd.model.Resturents;
import com.project.ofd.model.User;
import com.project.ofd.repository.resturentRepository;
import com.project.ofd.service.ResturentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class resturentServiceImp implements ResturentService {
    @Autowired
    private resturentRepository resturentRepository;

    @Override
    public Resturents creteRestuents(createResturentRequest req, User user) {
        Resturents resturent = new Resturents();
        resturent.setOwner(user);
        resturent.setName(req.getName());
        resturent.setDescription(req.getDescription());
        resturent.setAddress(req.getAddress());
        resturent.setStatus(Boolean.parseBoolean(req.getOpeningHours()));
        resturent.setCuisineType(req.getCuisineType());
        resturent.setContactInformation(req.getContactInformation());
        resturent.setImages(req.getImages());
        resturentRepository.save(resturent);
        return resturent;
    }

    @Override
    public Resturents updateResturent(Long ResturentId, createResturentRequest updateReq) {
        Resturents resturent = findResturentById(ResturentId);
        resturent.setName(updateReq.getName());
        resturent.setDescription(updateReq.getDescription());
        resturent.setAddress(updateReq.getAddress());
        resturent.setStatus(Boolean.parseBoolean(updateReq.getOpeningHours()));
        resturent.setCuisineType(updateReq.getCuisineType());
        resturent.setContactInformation(updateReq.getContactInformation());
        resturent.setImages(updateReq.getImages());
        resturentRepository.save(resturent);
        return resturent;
    }

    @Override
    public Resturents deleteResturent(Long ResturentId) {
        Resturents resturent = findResturentById(ResturentId);
        resturentRepository.delete(resturent);
        return resturent;
    }

    @Override
    public Resturents findResturentById(Long ResturentId) {
        Resturents resturent = resturentRepository.findById(ResturentId).get();
        return resturent;
    }

    @Override
    public List<Resturents> getAllResturents() {
        return resturentRepository.findAll();
    }
    

    @Override
    public List<Resturents> searchResturents() {
        return List.of();
    }

    @Override
    public boolean updateStatus(Long resturentId) {
        Resturents resturents = resturentRepository.findById(resturentId).get();
        resturents.setStatus(!resturents.isStatus());
        boolean Status = resturents.isStatus();
        resturentRepository.save(resturents);
        return Status;
    }
}
